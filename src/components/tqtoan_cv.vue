<template>
  <div class="table-responsive">
    <table id="info-cv" class="table table-primary">
      <tbody v-if="cvLoaded">
        <tr class="name-candidate">
          <td colspan="2">{{ cv_tqtoan.personal_info.full_name }}</td>
          <td rowspan="3">
            <div class="avt">
              <div class="circular--portrait">
                <img v-bind:src="cv_tqtoan.personal_info.avt" alt="avt"/>
              </div>
            </div>
          </td>
        </tr>
        <tr class="situation-cadidate">
          <td colspan="2">{{ cv_tqtoan.personal_info.situation }}</td>
        </tr>
        <tr>
          <td colspan="2">
            <hr style="height: 2px; background: blueviolet" />
          </td>
        </tr>
        <tr class="fontsize">
          <td style="width: 250px;">
            <a>
              <img class="icon" src="../assets/img/calendar.svg" alt="mail-icon" />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.date_of_birth }}</span>
          </td>
          <td style="width: 200px;">
            <div>

              <a>
                <img class="icon" src="../assets/img/call.svg" alt="phone-number-icon" />
              </a>
              <span class="content">{{ cv_tqtoan.personal_info.phone }}</span>
            </div>
          </td>
          <td>
            <a>
              <img class="icon" src="../assets/img/location.svg" alt="location-icon" />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.address }}</span>
          </td>
        </tr>
        <tr class="fontsize">
          <td style="width: 250px;">
            <a>
              <img class="icon" src="../assets/img/mail.svg" alt="mail-icon" />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.email }}</span>
          </td>
          <td>
            <a>
              <img class="icon" src="../assets/img/logo-github.svg" alt="location-icon" />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.github }}</span>
          </td>
          <td>
            <a>
              <img class="icon" src="../assets/img/logo-linkedin.svg" alt="mail-icon" />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.linkin }}</span>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <hr />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="line-title">
              <a class="title">OBJECTIVE</a>
            </div>
            <p>
              {{ cv_tqtoan.objective.content }}
            </p>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <hr />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="line-title">
              <a class="title">WORK EXPERIENCE</a>
            </div>
          </td>
        </tr>
        <template v-for="wExp in cv_tqtoan.work_experience" :key="wExp.ID">
          <tr class="work-exp">
            <td colspan="3">
              <table class="table table-primary">
                <tbody>
                  <tr>
                    <td class="field" style="width: 270px;">
                      <a class="name-loca">{{ wExp.company }}</a>
                    </td>
                    <td style="width: 20px;">
                      <a><img class="dot" src="../assets/img/ellipse-outline.svg" alt="big-dot"></a>
                    </td>
                    <td>
                      <a style="font-weight: bold;">{{ wExp.position }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="time">{{ wExp.duration }}</td>
                    <td class="line">
                      <div class="line-vertical"></div>
                    </td>
                    <td>
                      <ul v-for="decs in wExp.job_description" :key="decs.ID">
                        <li>{{ decs }}</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </template>
        <tr>
          <td colspan="3">
            <hr />
          </td>
        </tr>
        <tr class="work-exp">
          <td colspan="3">
            <table class="table table-primary">
              <tbody>
                <tr>
                  <td class="field" style="width: 270px;">
                    <div class="line-title">
                      <a class="title">EDUCATION</a>
                    </div>
                  </td>
                  <td style="width: 20px;">
                    <a><img class="dot" src="../assets/img/ellipse-outline.svg" alt="big-dot"></a>
                  </td>
                  <td>
                    <div class="line-title">
                      <a class="title">SKILLS</a>
                    </div>
                  </td>
                </tr>
                <tr class="work-exp">
                  <td class="education">
                    <table class="table table-primary">
                      <template v-for="edu in cv_tqtoan.education" :key="edu.ID">
                        <tbody>
                          <tr>
                            <td>
                              <a class="name-loca">{{ edu.institution }}</a>
                            </td>
                          </tr>
                          <tr>
                            <td>{{ edu.major }}</td>
                          </tr>
                          <tr>
                            <td>{{ edu.duration }}</td>
                          </tr>
                          <tr>
                            <td>{{ edu.summary }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </table>
                  </td>
                  <td class="line">
                    <div class="line-vertical"></div>
                  </td>
                  <td class="skills">
                    <table class="table table-primary">
                      <template v-for="skill in cv_tqtoan.skills" :key="skill.ID">
                        <tbody>
                          <tr>
                            <td class="field">
                              <a class="name-loca">{{ skill.title_skills }}</a>
                            </td>
                          </tr>
                          <template v-for="description_skill in skill.description_skills" :key="description_skill.ID">
                            <tr>
                              <td v-if="skill.IsSoftSkills != 'true'"><a>{{ description_skill.name_skills }}</a></td>
                              <td v-else>
                                <ul>
                                  <li>{{ description_skill.name_skills }}</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <ul v-for="desc_s in description_skill.description_skills" :key="desc_s.ID">
                                  <li>{{ desc_s }}</li>
                                </ul>
                              </td>
                            </tr>
                          </template>

                        </tbody>
                      </template>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <hr />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TqtoanCV',
  el: '#info-cv',
  data() {
    return{
    cvLoaded: true,
    cv_tqtoan: {
      "personal_info": {
        "full_name": "Tran Quoc Toan",
        "situation": "Web Development",
        "date_of_birth": "19/09/2001",
        "address": "Thu Duc District, Ho Chi Minh City, Vietnam",
        "phone": "0334243923",
        "email": "toanquoctran190901@gmail.com",
        "linkin": "https://www.linkedin.com/in/trqutn",
        "github": "https://github.com/TrQuTo",
        "avt": require("../assets/img/avt-cv-tqt.jpg")
      },
      "objective": {
        "content": "As a software programmer with nearly 1 year of experience in the field of developing applications and websites to manage restaurant, business and factory systems. I participate in projects following models such as: Agile Scrum, Horenso Rule, 5h1w. With the spirit of eager to learn and always train myself, I hope to find a dynamic working environment that can help me improve my professional skills and English."
      },
      "education": [
        {
          "institution": "Software Technology Center - Can Tho University",
          "major": "Programmer - Aptech",
          "duration": "08/2019 - 07/2023",
          "summary": "Have a solid foundation in programming from front end to backend, web to application"
        },

        {
          "institution": "English center D2D Toeic",
          "major": "Communicate",
          "duration": "02/2024 - 04/2024",
          "summary": "Daily communication"
        }
      ],
      "work_experience": [
        {
          "company": "Individuals System (IVS)",
          "position": "Fresher",
          "duration": "11/2023 - 04/2024",
          "job_description":
          {
            "desc1": "Participate in writing API for restaurant system management web",
            "desc2": "Participate in building UI for the Web to manage a restaurant system, including: Reservations, cancellations, tables, table arrangement diagrams,...",
            "desc3": "Understand the operations of a restaurant"
          }

        },
        {
          "company": "Individuals System (IVS)",
          "position": "Intern",
          "duration": "07/2023 - 11/2023",
          "job_description":
          {
            "desc1": "Participate in converting factory management applications in Factories and Enterprises from Winform to Webform",
            "desc2": "Use Devexpress to rebuild UI Controls to process data"
          }

        },
        {
          "company": "CUSC",
          "position": "Semester 4 project",
          "duration": "09/2022 - 12/2022",
          "job_description":
          {
            "desc1": "Build a website selling clothes using Java Spring MVC",
            "desc2": "https://github.com/TrQuTo/ShopJava"
          }

        }
      ],
      "skills": [
        {
          "title_skills": "Backend",
          "description_skills": [
            {
              "name_skills": ".NET (Winform, Webform, MVC)",
              "description_skills":
              {
                "desc_s1": "Entity Framework 6",
                "desc_s2": "Rest API: Define APIs according to RESTful API standards and write OOP standard code to manipulate data returned to the client",
                "desc_s3": "Authentication and authorization: JWT",
                "desc_s4": "Have knowledge about Design Pattern"
              }
            },
            {
              "name_skills": "SQL",
              "description_skills":
              {
                "desc_s1": "Can handle multi-table data",
                "desc_s2": "Create relationships between tables"
              }
            },
            {
              "name_skills": "Server",
              "description_skills":
              {
                "desc_s1": "Experienced of using Linux server, AWS, GG Cloud."
              }
            }
          ]
        },
        {
          "title_skills": "Fontend",
          "description_skills": [
            {
              "name_skills": "HTML, CSS, JS, VueJS, Angular",
              "description_skills":
              {
                "desc_s1": "Build components, align layout, process data returned from Backend"
              }

            },
            {
              "name_skills": "Devexpress",
              "description_skills":
              {
                "desc_s1": "DevExpress WPF: Build interfaces with controls such as: GridView, Combobox, Card,..."
              }

            }
          ]
        },
        {
          "title_skills": "Source Management",
          "description_skills": [
            {
              "name_skills": "GIT",
              "description_skills":
              {
                "desc_s1": "Know basic tasks with GIT.",
                "desc_s2": "Know how to handle conflict.",
                "desc_s3": "High-performance task: Cherry-pick, Revert,..."
              }
            }
          ]
        },
        {
          "title_skills": "English",
          "description_skills": [
            {
              "name_skills": "Conversations",
              "description_skills":
              {
                "desc_s1": "Daily communication.",
                "desc_s2": "Study documents in English."
              }
            }
          ]
        },
        {
          "title_skills": "Soft skills",
          "IsSoftSkills": "true",
          "description_skills": [
            {
              "name_skills": "Teamwork",
              "description_skills": {}
            },

            {
              "name_skills": "Problem solving",
              "description_skills": {}
            },
            {
              "name_skills": "Research",
              "description_skills": {}
            },
            {
              "name_skills": "Time management",
              "description_skills": {}
            }
          ]
        }
      ],
      "interests": [
        "Research new technology"
      ]
    }
  }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table-responsive{
  width: 862px;
  border-radius: 10px;
  padding: 7mm 5mm 7mm 5mm;
  box-shadow: 0 0 25px rgba(0, 0, 0, .25);
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
}

.table{
  border: 1px;
  background-color: white;
}

.avt{
  text-align: -webkit-right;
  padding: 0 10px 10px 0;
}

.icon{
  width: 14px;
  height: 14px;
}

.fontsize{
  font-size: 14px;
  td{
      padding-right: 15px;
      a{
          vertical-align: -webkit-baseline-middle;
      }
  }
}

.name-candidate{
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
}

.situation-cadidate{
  font-size: 22px;
}

.education{
  vertical-align: top;
  tr{
      display: block;
      padding: 7px 0 7px 0;
  }
}

.circular--portrait {
  margin-top: -10px;
  text-align: right;
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(163 156 152);
}

.circular--portrait img {
width: 100%;
height: auto;
}

.title{
  font-size: 22px;
}

.dot{
  width: 15px;
  height: 15px;
}

.line-vertical{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.work-exp .line-vertical{
  border-left: 1px ridge black;
}

.line {
  position: relative;
}

.work-exp .line{
  padding-left: 8px;
}

.work-exp .time{
  vertical-align: top;
  padding-left: 5px;
}

.work-exp .field{
  font-size: 17px;
}

.work-exp ul{
  margin-top: 0px;
  margin-bottom: 0px;
}

a:link{
  color: rgba(0, 0, 0, 0.527);
}

a:active {
  color: rgba(0, 0, 0, .25);
}

.content{
  position: relative;
  top: 2px;
  left: 5px;
}

.line-title{
  display: inline-block;
  border-bottom: 2px solid blueviolet;
}

.name-loca{
  font-weight: bold;
  font-size: 18px;
}

.skills ul{
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
