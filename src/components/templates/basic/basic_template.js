
export default {
    name: "basic_template",
    el: "#info-cv",
    data() {
      return {
        cvLoaded: true,
        cv_tqtoan: {
          personal_info: {
            full_name: "Tran Quoc Toan",
            situation: "Web Development",
            date_of_birth: "19/09/2001",
            address: "Thu Duc District, Ho Chi Minh City, Vietnam",
            phone: "0334243923",
            email: "toanquoctran190901@gmail.com",
            linkin: "https://www.linkedin.com/in/trqutn",
            github: "https://github.com/TrQuTo",
            avt: require("@/assets/img/avt-cv-tqt.jpg"),
          },
          objective: {
            content:
              "As a software programmer with nearly 1 year of experience in the field of developing applications and websites to manage restaurant, business and factory systems. I participate in projects following models such as: Agile Scrum, Horenso Rule, 5h1w. With the spirit of eager to learn and always train myself, I hope to find a dynamic working environment that can help me improve my professional skills and English.",
          },
          education: [
            {
              institution: "Software Technology Center - Can Tho University",
              major: "Programmer - Aptech",
              duration: "08/2019 - 07/2023",
              summary:
                "Have a solid foundation in programming from front end to backend, web to application",
            },
  
            {
              institution: "English center D2D Toeic",
              major: "Conversations",
              duration: "02/2024 - 04/2024",
              summary: "Daily communication",
            },
          ],
          work_experience: [
            {
              company: "Individuals System (IVS)",
              position: "Fresher",
              duration: "11/2023 - 04/2024",
              job_description: {
                desc1:
                  "Participate in writing API for restaurant system management web",
                desc2:
                  "Participate in building UI for the Web to manage a restaurant system, including: Reservations, cancellations, tables, table arrangement diagrams,...",
                desc3: "Understand the operations of a restaurant",
              },
            },
            {
              company: "Individuals System (IVS)",
              position: "Intern",
              duration: "07/2023 - 11/2023",
              job_description: {
                desc1:
                  "Participate in converting factory management applications in Factories and Enterprises from Winform to Webform",
                desc2: "Use Devexpress to rebuild UI Controls to process data",
              },
            },
            {
              company: "CUSC",
              position: "Semester 4 project",
              duration: "09/2022 - 12/2022",
              job_description: {
                desc1: "Build a website selling clothes using Java Spring MVC",
                desc2: "https://github.com/TrQuTo/ShopJava",
              },
            },
          ],
          skills: [
            {
              title_skills: "Backend",
              description_skills: [
                {
                  name_skills: ".NET (Winform, Webform, MVC)",
                  description_skills: {
                    desc_s1: "Entity Framework 6",
                    desc_s2:
                      "Rest API: Define APIs according to RESTful API standards and write OOP standard code to manipulate data returned to the client",
                    desc_s3: "Authentication and authorization: JWT",
                    desc_s4: "Have knowledge about Design Pattern",
                  },
                },
                {
                  name_skills: "SQL",
                  description_skills: {
                    desc_s1: "Can handle multi-table data",
                    desc_s2: "Create relationships between tables",
                  },
                },
                {
                  name_skills: "Server",
                  description_skills: {
                    desc_s1:
                      "Experienced of using Linux server, AWS, GG Cloud, Docker.",
                  },
                },
              ],
            },
            {
              title_skills: "Fontend",
              description_skills: [
                {
                  name_skills: "HTML, CSS, JS, VueJS, Angular",
                  description_skills: {
                    desc_s1:
                      "Build components, align layout, process data returned from Backend",
                  },
                },
                {
                  name_skills: "Devexpress",
                  description_skills: {
                    desc_s1:
                      "DevExpress WPF: Build interfaces with controls such as: GridView, Combobox, Card,...",
                  },
                },
              ],
            },
            {
              title_skills: "Source Management",
              description_skills: [
                {
                  name_skills: "GIT",
                  description_skills: {
                    desc_s1: "Know basic tasks with GIT.",
                    desc_s2: "Know how to handle conflict.",
                    desc_s3: "High-performance task: Cherry-pick, Revert,...",
                  },
                },
              ],
            },
            {
              title_skills: "English",
              description_skills: [
                {
                  name_skills: "Conversations",
                  description_skills: {
                    desc_s1: "Daily communication.",
                    desc_s2: "Study documents in English.",
                  },
                },
              ],
            },
            {
              title_skills: "Soft skills",
              IsSoftSkills: "true",
              description_skills: [
                {
                  name_skills: "Teamwork",
                  description_skills: {},
                },
  
                {
                  name_skills: "Problem solving",
                  description_skills: {},
                },
                {
                  name_skills: "Research",
                  description_skills: {},
                },
                {
                  name_skills: "Time management",
                  description_skills: {},
                },
              ],
            },
          ],
          interests: ["Research new technology"],
        },
      };
    },
  };