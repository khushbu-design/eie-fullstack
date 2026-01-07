import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    console.log("=== API /send-email Called ===");
    console.log("Content-Type:", request.headers.get("content-type"));
    console.log("SMTP Host:", process.env.SMTP_HOST || "MISSING");
    console.log("SMTP Port:", process.env.SMTP_PORT || "MISSING");
    console.log("SMTP User:", process.env.SMTP_USER || "MISSING");
    console.log("SMTP Pass length:", process.env.SMTP_PASS ? process.env.SMTP_PASS.length : "MISSING");

    const contentType = request.headers.get("content-type") || "";

    let to = "info@eieinstruments.com";
    let subject = "New Submission from EIE Instruments Website";
    let html = `<h2>New Submission from Website</h2><p><strong>Submitted on:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p><hr>`;
    let attachments = [];

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP env vars!");
      return Response.json({ success: false, error: "SMTP configuration missing" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.verify();
      console.log("SMTP Server connected successfully");
    } catch (verifyError) {
      console.error("SMTP Connection Error:", verifyError);
    }

    // FormData handling (Contact form, InquiryPopup, Complaints with file)
    if (contentType.includes("multipart/form-data")) {
      console.log("Processing FormData (Inquiry/Complaint)");
      const formData = await request.formData();
      const overrideTo = formData.get("to");
      if (overrideTo && overrideTo.includes("@")) to = overrideTo;

      subject = "New Product Inquiry / Service Request from Website";
      html += "<h3>Submission Details</h3><ul style='list-style:none; padding-left:0;'>";
      for (const [key, value] of formData.entries()) {
        if (key === "to") continue;
        if (key === "file" && value instanceof File && value.size > 0) {
          console.log("Attaching file:", value.name, "size:", value.size);
          const buffer = Buffer.from(await value.arrayBuffer());
          attachments.push({
            filename: value.name || "uploaded-file",
            content: buffer,
          });
          html += `<li><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value.name} (attached)</li>`;
        } else if (value?.toString().trim()) {
          const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
          html += `<li><strong>${displayKey}:</strong> ${value.toString()}</li>`;
        }
      }
      html += "</ul>";
    }

    // JSON handling (Job, Remarks)
    else if (contentType.includes("application/json")) {
      console.log("Processing JSON (Job/Remarks)");
      const body = await request.json();

      if (body.to && body.to.includes("@")) to = body.to;
      if (body.subject) subject = body.subject;
      if (body.message) html = body.message;

      // Resume attachment for JobForm
      if (body.attachment && typeof body.attachment === "string" && body.attachment.startsWith("data:")) {
        console.log("Attaching resume");
        const base64Data = body.attachment.split(",")[1];
        const filename = body.attachmentFilename || "Resume.pdf";
        attachments.push({
          filename,
          content: Buffer.from(base64Data, "base64"),
        });
        html += `<p><strong>Attachment:</strong> ${filename} (attached)</p>`;
      }
    } else {
      console.log("Unsupported content type:", contentType);
      return Response.json({ success: false, error: "Unsupported content type" }, { status: 400 });
    }

    console.log("Sending email to:", to);
    console.log("Subject:", subject);
    console.log("Attachments count:", attachments.length);

    await transporter.sendMail({
      from: `"EIE Instruments" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log("Email sent successfully!");
    return Response.json({ success: true });
  } catch (error) {
    console.error("=== EMAIL ERROR ===");
    console.error("Error message:", error.message);
    console.error("Error code:", error.code || "N/A");
    console.error("Full error:", error);
    return Response.json({ success: false, error: error.message || "Failed to send email" }, { status: 500 });
  }
}