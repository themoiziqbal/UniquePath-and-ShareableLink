const form1 = document.getElementById("resume-form") as HTMLFormElement;

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form1);

  const profilePictureInput = document.getElementById(
    "profile-picture"
  ) as HTMLInputElement;
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const addressElement = document.getElementById("address") as HTMLInputElement;
  const uniNameElement = document.getElementById("uniName") as HTMLInputElement;
  const uniDeptElement = document.getElementById("uniDept") as HTMLInputElement;
  const uniEnrollElement = document.getElementById(
    "uniEnroll"
  ) as HTMLInputElement;
  const uniEndElement = document.getElementById("uniEnd") as HTMLInputElement;
  const colNameElement = document.getElementById("colName") as HTMLInputElement;
  const colFacultyElement = document.getElementById(
    "colFaculty"
  ) as HTMLInputElement;
  const colEnrollElement = document.getElementById(
    "colEnroll"
  ) as HTMLInputElement;
  const colEndElement = document.getElementById("colEnd") as HTMLInputElement;
  const schoolNameElement = document.getElementById(
    "schoolName"
  ) as HTMLInputElement;
  const schoolEndElement = document.getElementById(
    "schoolEnd"
  ) as HTMLInputElement;
  const skillsElement = document.getElementById(
    "skills"
  ) as HTMLTextAreaElement;
  const experienceElement = document.getElementById(
    "experience"
  ) as HTMLTextAreaElement;
  const languagesElement = document.getElementById(
    "languages"
  ) as HTMLTextAreaElement;

  if (
    profilePictureInput &&
    nameElement &&
    emailElement &&
    phoneElement &&
    addressElement &&
    uniNameElement &&
    uniDeptElement &&
    uniEnrollElement &&
    uniEndElement &&
    colNameElement &&
    colFacultyElement &&
    colEnrollElement &&
    colEndElement &&
    schoolNameElement &&
    schoolEndElement &&
    skillsElement &&
    experienceElement &&
    languagesElement
  ) {
    // Gather user input
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const uniName = uniNameElement.value;
    const uniDept = uniDeptElement.value;
    const uniEnroll = uniEnrollElement.value;
    const uniEnd = uniEndElement.value;
    const colName = colNameElement.value;
    const colFaculty = colFacultyElement.value;
    const colEnroll = colEnrollElement.value;
    const colEnd = colEndElement.value;
    const schoolName = schoolNameElement.value;
    const schoolEnd = schoolEndElement.value;
    const skills = skillsElement.value;
    const experience = experienceElement.value;
    const languages = languagesElement.value;

    const profilePictureFile = formData.get("profile-picture") as File;
    const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : "";

    // Generate resume HTML with editable functionality
    const resumeContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Resume</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0;
          padding: 0; background-color: rgb(181, 216, 255); }

          header {text-transform: uppercase; padding:6px 0; font-size: 2rem; color: #000; text-shadow: 2px 6px 4px #000000; text-align: center;background-color: #0066ffad; max-width: 100vw;font-family: "Playwrite CU", cursive; }

          section { margin: 0 auto; }

          h1 { color: #000; font-size: 2rem; margin: 0; text-shadow: 2px 1px 3px #d8d8d8;}
          h3 { font-size: 1.5rem; margin: 20px 0; color: #000; text-shadow: 2px 1px 3px #d8d8d8;}

          main { margin: 20 auto; padding: 20px;}

          .profile-picture { width: 200px; height: 200px; object-fit: cover; border: 2px solid #ccc; border-radius: 50%; }

          #personal-info-section{
          display: flex; justify-content: space-between; max-width:80vw; margin: 50px auto; 
          align-items: flex-end; }

          #education-section{display: flex; flex-direction: column; max-width: 80vw; margin: 50px auto; }

          #skills-section{ max-width: 80vw; margin: 50px auto; display: flex; flex-direction: column;}

          #experience-section{ max-width: 80vw; margin: 50px auto; }

          #languages-section{ max-width: 80vw; margin: 50px auto; }

          #download-section{ max-width: 80vw; margin: 50px auto; }

          #footer{ background-color: rgb(24, 23, 23); color: white; }

          #footer-container{ display: flex; justify-content: space-evenly; flex-wrap: wrap; text-align: center; padding: 7px; }

          #footer-section{ flex: 1; margin: 20px; min-width: 100px; }

          #footer-section div a{ text-decoration: none; color: white; margin: 10px 0; padding: 2px 8px;}
          
          #footer-section div a:hover{ color: lightgray; text-decoration: underline; }

          #footer-section h2{
          border-bottom: 2px solid white;
          padding-bottom: 10px ; 
          }

          #footer-bottom{ text-align: center; padding: 5px; background-color: #333131;}

          p { margin: 10px 0; font-size: 1.2rem; }
          strong { font-weight: bold; }

          @media only screen and (max-width: 840px) {
    header{
        font-size: 1.5rem;
    }

    #personal-info-section{
        flex-direction: column-reverse;
        max-width: 98vw;
        align-items: self-start;
    }


    h1{
        font-size: 1.5rem;
    }

    h3{
        font-size: 1.3rem;
    }

    p { font-size: 1.05rem; }


    #education-section{
        max-width: 98vw;
    }

    #skills-section{
        max-width: 98vw;
    }
    #experience-section{
        max-width: 98vw;
    }
    #languages-section{
        max-width: 98vw;
    }
    #footer-container{
        flex-direction: column;
    }
}   

        </style>
      </head>
      <body>
        <header>
          <h1 contenteditable="true">${name}</h1>
        </header>
         <main>
          <section id="personal-info-section">
          <div>
          <h1>Personal Information</h1>
          <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
          <p><strong>Phone Number:</strong> <span contenteditable="true">${phone}</span></p>
          <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
          <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>
          </div>
          <div>
          ${
            profilePictureURL
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">`
            : ""
            }
            </div>
          </section>
          <section id="education-section">
            <h1>Education</h1>
            <h3>University Info</h3>
            <p><strong>Name:</strong> <span contenteditable="true">${uniName}</span></p>
            <p><strong>Department:</strong> <span contenteditable="true">${uniDept}</span></p>
            <p><strong>Enroll Year:</strong> <span contenteditable="true">${uniEnroll}</span></p>
            <p><strong>End Year:</strong> <span contenteditable="true">${uniEnd}</span></p>
            <h3>College Info</h3>
            <p><strong>Name:</strong> <span contenteditable="true">${colName}</span></p>
            <p><strong>Department:</strong> <span contenteditable="true">${colFaculty}</span></p>
            <p><strong>Enroll Year:</strong> <span contenteditable="true">${colEnroll}</span></p>
            <p><strong>End Year:</strong> <span contenteditable="true">${colEnd}</span></p>
            <h3>School Info</h3>
            <p><strong>Name:</strong> <span contenteditable="true">${schoolName}</span></p>
            <p><strong>End Year:</strong> <span contenteditable="true">${schoolEnd}</span></p>
          </section>
          <section id="skills-section">
            <h1>Skills</h1>
            <p contenteditable="true">${skills}</p>
          </section>
          <section id="experience-section">
            <h1>Experience</h1>
            <p contenteditable="true">${experience}</p>
          </section>
          <section id="languages-section">
            <h1>Languages</h1>
            <p contenteditable="true">${languages}</p>
          </section>
            <!-- Shareable Link Button -->
            <section style="max-width: 80vw; margin: 50px auto;">
            <div id="shareable-link" style="text-align: center; margin: 20px 0;">
            <button id="share-button" style="padding: 10px; background-color: #28a745; color: white; border: none; cursor: pointer;">
            Copy Shareable Link
            </button>
            </div>
            </section>
        </main>
        <footer id="footer">
          <div id="footer-container">
            <div id="footer-section">
              <h2>Contact Us</h2>
              <p style="font-size: 16px;">Email: ${email}</p>
              <p style="font-size: 16px;">Phone: ${phone}</p>
              <p style="font-size: 16px;">Address : ${address}</p>
            </div>
            <div id="footer-section">
              <h2>Follow Us</h2>
              <div class="social-links">
                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                <a href="https://github.com" target="_blank">Github</a>
                <a href="https://vercel.com" target="_blank">Vercel</a>
              </div>
            </div>
          </div>
          <div id="footer-bottom">
            <p style="font-size: 16px;">Copyright&copy; XYZ. All Rights Reserved.</p>
          </div>
        </footer>
        <script>
          // Shareable link functionality
          document.getElementById("share-button").addEventListener("click", () => {
            const blob = new Blob(['<!DOCTYPE html>' + document.documentElement.outerHTML], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            navigator.clipboard.writeText(url).then(() => {
              alert("Shareable link copied to clipboard!");
            }).catch(() => {
              alert("Failed to copy the link.");
            });
          });
        </script>
      </body>
      </html>
    `;

    // Open resume in a new window
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.open();
      newWindow.document.write(resumeContent);
      newWindow.document.close();

      // Add a print button
      const printButton = newWindow.document.createElement("button");
      printButton.textContent = "Print/Download as PDF";
      printButton.style.cssText =
        "position: fixed; top: 80px; right: 10px; padding: 10px; background-color: #007BFF; color: white; border: none; cursor: pointer;";
      newWindow.document.body.appendChild(printButton);

      printButton.addEventListener("click", () => {
        newWindow.print();
      });
    } else {
      console.error("Failed to open a new tab or window.");
    }
  } else {
    console.error("One or more required elements are missing.");
  }
});
