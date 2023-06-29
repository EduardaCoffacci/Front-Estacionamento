import { service } from "../service/index.js";
import { view } from "../view/index.js";

view.getCheckinHtml();

service.getActivities().then((dados)=>{
    dados.forEach(element => {
        console.log(element)
    });
})
