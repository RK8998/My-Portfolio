"use strict";

// Download resume js

document
  .getElementById("download-resume")
  .addEventListener("click", function () {
    const resumeUrl = "../resume/krushang_rathod_resume.pdf"; // Change this to your resume file URL
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Krushang_Rathod_Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
