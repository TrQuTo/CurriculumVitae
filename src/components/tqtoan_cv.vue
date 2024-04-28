<template>
  <!-- <div class="select">
    <select class="language" name="Languages" title="Languages">
      <option style="background-image:url(assets/img/add-circle-outline.svg)" title="Vietnam" name="Vietnam" value="langVN"><span>Việt nam</span></option>
      <option style="background-image:url(assets/img/add-circle-outline.svg)" title="English" name="English" value="langEN"><span>English</span></option>
    </select>
  </div> -->
  <div class="table-responsive">
    <table id="info-cv" class="table table-primary">
      <tbody v-if="cvLoaded">
        <tr class="name-candidate">
          <td colspan="2">{{ cv_tqtoan.personal_info.full_name }}</td>
          <td rowspan="3">
            <div class="avt">
              <div class="circular--portrait">
                <img v-bind:src="cv_tqtoan.personal_info.avt" alt="avt" />
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
          <td style="width: 250px">
            <a>
              <img
                class="icon"
                src="../assets/img/calendar.svg"
                alt="mail-icon"
              />
            </a>
            <span class="content">{{
              cv_tqtoan.personal_info.date_of_birth
            }}</span>
          </td>
          <td style="width: 200px">
            <div>
              <a>
                <img
                  class="icon"
                  src="../assets/img/call.svg"
                  alt="phone-number-icon"
                />
              </a>
              <span class="content">{{ cv_tqtoan.personal_info.phone }}</span>
            </div>
          </td>
          <td>
            <a>
              <img
                class="icon"
                src="../assets/img/location.svg"
                alt="location-icon"
              />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.address }}</span>
          </td>
        </tr>
        <tr class="fontsize">
          <td style="width: 250px">
            <a>
              <img class="icon" src="../assets/img/mail.svg" alt="mail-icon" />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.email }}</span>
          </td>
          <td>
            <a>
              <img
                class="icon"
                src="../assets/img/logo-github.svg"
                alt="location-icon"
              />
            </a>
            <span class="content">{{ cv_tqtoan.personal_info.github }}</span>
          </td>
          <td>
            <a>
              <img
                class="icon"
                src="../assets/img/logo-linkedin.svg"
                alt="mail-icon"
              />
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
              <a class="title">{{ $t("objective") }}</a>
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
              <a class="title">{{ $t("work-experience") }}</a>
            </div>
          </td>
        </tr>
        <template v-for="wExp in cv_tqtoan.work_experience" :key="wExp.ID">
          <tr class="work-exp">
            <td colspan="3">
              <table class="table table-primary">
                <tbody>
                  <tr>
                    <td class="field" style="width: 270px">
                      <a class="name-loca">{{ wExp.company }}</a>
                    </td>
                    <td style="width: 20px">
                      <a
                        ><img
                          class="dot"
                          src="../assets/img/ellipse-outline.svg"
                          alt="big-dot"
                      /></a>
                    </td>
                    <td>
                      <a style="font-weight: bold">{{ wExp.position }}</a>
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
                  <td class="field" style="width: 270px">
                    <div class="line-title">
                      <a class="title">{{ $t("education") }}</a>
                    </div>
                  </td>
                  <td style="width: 20px">
                    <a
                      ><img
                        class="dot"
                        src="../assets/img/ellipse-outline.svg"
                        alt="big-dot"
                    /></a>
                  </td>
                  <td>
                    <div class="line-title">
                      <a class="title">{{ $t("skills") }}</a>
                    </div>
                  </td>
                </tr>
                <tr class="work-exp">
                  <td class="education">
                    <table class="table table-primary">
                      <template
                        v-for="edu in cv_tqtoan.education"
                        :key="edu.ID"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <a class="name-loca">{{ edu.institution }}</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <li style="list-style-type: disclosure-open">
                                {{ edu.major }}
                              </li>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <li
                                style="
                                  list-style-type: circle;
                                  padding-left: 17px;
                                "
                              >
                                {{ edu.duration }}
                              </li>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <li
                                style="
                                  list-style-type: circle;
                                  padding-left: 17px;
                                "
                              >
                                {{ edu.summary }}
                              </li>
                            </td>
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
                      <template
                        v-for="skill in cv_tqtoan.skills"
                        :key="skill.ID"
                      >
                        <tbody>
                          <tr>
                            <td class="field">
                              <a class="name-loca">{{ skill.title_skills }}</a>
                            </td>
                          </tr>
                          <template
                            v-for="description_skill in skill.description_skills"
                            :key="description_skill.ID"
                          >
                            <tr>
                              <td v-if="skill.IsSoftSkills != 'true'">
                                <a>{{ description_skill.name_skills }}</a>
                              </td>
                              <td v-else>
                                <ul>
                                  <li>{{ description_skill.name_skills }}</li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <ul
                                  v-for="desc_s in description_skill.description_skills"
                                  :key="desc_s.ID"
                                >
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

<script src="./tqtoan_cv.js" type="text/javascript"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-responsive {
  width: 862px;
  border-radius: 10px;
  padding: 7mm 5mm 7mm 5mm;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
}

.table {
  border: 1px;
  background-color: white;
}

.avt {
  text-align: -webkit-right;
  padding: 0 10px 10px 0;
}

.icon {
  width: 14px;
  height: 14px;
}

.fontsize {
  font-size: 14px;
  td {
    padding-right: 15px;
    a {
      vertical-align: -webkit-baseline-middle;
    }
  }
}

.name-candidate {
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
}

.situation-cadidate {
  font-size: 22px;
}

.education {
  vertical-align: top;
  tr {
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

.title {
  font-size: 22px;
  text-transform: uppercase;
}

.dot {
  width: 15px;
  height: 15px;
}

.line-vertical {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.work-exp .line-vertical {
  border-left: 1px ridge black;
}

.line {
  position: relative;
}

.work-exp .line {
  padding-left: 8px;
}

.work-exp .time {
  vertical-align: top;
  padding-left: 5px;
}

.work-exp .field {
  font-size: 17px;
}

.work-exp ul {
  margin-top: 0px;
  margin-bottom: 0px;
}

a:link {
  color: rgba(0, 0, 0, 0.527);
}

a:active {
  color: rgba(0, 0, 0, 0.25);
}

.content {
  position: relative;
  top: 2px;
  left: 5px;
}

.line-title {
  display: inline-block;
  border-bottom: 2px solid blueviolet;
}

.name-loca {
  font-weight: bold;
  font-size: 18px;
}

.skills ul {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
