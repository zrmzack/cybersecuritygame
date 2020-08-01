//这里就可以引用你要显示的页面了
import index from '@/view/login/index.vue'
import intro from '@/view/login/intro.vue'
import alert from "@/view/login/alert"
import password from "@/view/login/password";
import promotion from "@/view/questions/promotion";
import fireWall from "../view/questions/fireWall";
import emailAttack from "../view/questions/emailAttack";
import repassword from "../view/questions/repassword";
import wifiAttack from "../view/questions/wifiAttack";
import transferData from "../view/questions/transferData";
import lunchTime from "../view/questions/lunchTime";
import shoppingOnline from "../view/questions/shoppingOnline";
import socialAttachment from "../view/questions/socialAttachment";
import aliPay from "../view/questions/aliPay";
import pdfPrint from "../view/questions/pdfPrint";
import socialFreshMan from "../view/questions/socialFreshMan";
import outsideBusinessTalk from "../view/questions/outsideBusinessTalk";
import fireWallData from "../view/questions/fireWallData";
import windowPopup from "../view/questions/windowPopup";
import aliPayWrong from "../view/questions/aliPayWrong";
import lunchTimeWrong from "../view/questions/lunchTimeWrong";
//配置路由，path就是你浏览器地址，component就是跟着你要显示的页面，/表示默认地址。
export default [
  {path: "/", component: index},
  {path: "/intro", component: intro},
  {path: "/alert", component: alert},
  {path: "/aliPay", component: aliPay},
  {path: "/password", component: password},
  {path: "/lunchTime", component: lunchTime},
  {path: "/promotion", component: promotion},
  {path: "/fireWall", component: fireWall},
  {path: "/emailAttack", component: emailAttack},
  {path: "/shoppingOnline", component: shoppingOnline},
  {path: "/repassword", component: repassword},
  {path: "/wifiAttack", component: wifiAttack},
  {path: "/transferData", component: transferData},
  {path: "/shoppingOnline", component: shoppingOnline},
  {path: "/pdfPrint", component: pdfPrint},
  {path: "/socialFreshMan", component: socialFreshMan},
  {path: "/outsideBusinessTalk", component: outsideBusinessTalk},
  {path: "/socialAttachment", component: socialAttachment},
  {path: "/fireWallData", component: fireWallData},
  {path: "/windowPopup", component: windowPopup},
  {path: "/lunchTimeWrong", component: lunchTimeWrong},
  {path: "/aliPayWrong", component: aliPayWrong}
]
