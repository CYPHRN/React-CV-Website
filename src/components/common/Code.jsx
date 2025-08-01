import { dashboardCode } from "../code/dashboard";
import { forumCode } from "../code/forum";
import { loginCode } from "../code/login";
import { indexCode } from "../code/index";
import { profileCode } from "../code/profile";
import { registerCode } from "../code/register";

function getFileContent(activeFile) {
  switch (activeFile) {
    case "index":
      return indexCode;
    case "dashboard":
      return dashboardCode;
    case "forum":
      return forumCode;
    case "profile":
      return profileCode;
    case "register":
      return registerCode;
    case "login":
      return loginCode;
    default:
      return indexCode;
  }
}

export default getFileContent;
