gdjs.Cena_9501Code = {};
gdjs.Cena_9501Code.localVariables = [];
gdjs.Cena_9501Code.GDpainel_959501Objects1= [];
gdjs.Cena_9501Code.GDpainel_959501Objects2= [];
gdjs.Cena_9501Code.GDpainel_959501Objects3= [];
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1= [];
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects2= [];
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595comecarObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595comecarObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595certoObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595certoObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595certoObjects3= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3= [];
gdjs.Cena_9501Code.GDbtn_9595nextObjects1= [];
gdjs.Cena_9501Code.GDbtn_9595nextObjects2= [];
gdjs.Cena_9501Code.GDbtn_9595nextObjects3= [];
gdjs.Cena_9501Code.GDbackgroundObjects1= [];
gdjs.Cena_9501Code.GDbackgroundObjects2= [];
gdjs.Cena_9501Code.GDbackgroundObjects3= [];
gdjs.Cena_9501Code.GDnuvensObjects1= [];
gdjs.Cena_9501Code.GDnuvensObjects2= [];
gdjs.Cena_9501Code.GDnuvensObjects3= [];
gdjs.Cena_9501Code.GDcidadeObjects1= [];
gdjs.Cena_9501Code.GDcidadeObjects2= [];
gdjs.Cena_9501Code.GDcidadeObjects3= [];
gdjs.Cena_9501Code.GDfamiliaObjects1= [];
gdjs.Cena_9501Code.GDfamiliaObjects2= [];
gdjs.Cena_9501Code.GDfamiliaObjects3= [];
gdjs.Cena_9501Code.GDarvore_959501Objects1= [];
gdjs.Cena_9501Code.GDarvore_959501Objects2= [];
gdjs.Cena_9501Code.GDarvore_959501Objects3= [];
gdjs.Cena_9501Code.GDarvore_959502Objects1= [];
gdjs.Cena_9501Code.GDarvore_959502Objects2= [];
gdjs.Cena_9501Code.GDarvore_959502Objects3= [];
gdjs.Cena_9501Code.GDbolaObjects1= [];
gdjs.Cena_9501Code.GDbolaObjects2= [];
gdjs.Cena_9501Code.GDbolaObjects3= [];
gdjs.Cena_9501Code.GDBox_9595perguntaObjects1= [];
gdjs.Cena_9501Code.GDBox_9595perguntaObjects2= [];
gdjs.Cena_9501Code.GDBox_9595perguntaObjects3= [];
gdjs.Cena_9501Code.GDAcertoObjects1= [];
gdjs.Cena_9501Code.GDAcertoObjects2= [];
gdjs.Cena_9501Code.GDAcertoObjects3= [];
gdjs.Cena_9501Code.GDCursorObjects1= [];
gdjs.Cena_9501Code.GDCursorObjects2= [];
gdjs.Cena_9501Code.GDCursorObjects3= [];
gdjs.Cena_9501Code.GDAcerto2Objects1= [];
gdjs.Cena_9501Code.GDAcerto2Objects2= [];
gdjs.Cena_9501Code.GDAcerto2Objects3= [];
gdjs.Cena_9501Code.GDAcerto3Objects1= [];
gdjs.Cena_9501Code.GDAcerto3Objects2= [];
gdjs.Cena_9501Code.GDAcerto3Objects3= [];
gdjs.Cena_9501Code.GDAcerto4Objects1= [];
gdjs.Cena_9501Code.GDAcerto4Objects2= [];
gdjs.Cena_9501Code.GDAcerto4Objects3= [];
gdjs.Cena_9501Code.GDAcerto5Objects1= [];
gdjs.Cena_9501Code.GDAcerto5Objects2= [];
gdjs.Cena_9501Code.GDAcerto5Objects3= [];


gdjs.Cena_9501Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Cena_9501Code.GDarvore_959501Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getAngle() >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959501Objects1[k] = gdjs.Cena_9501Code.GDarvore_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959501Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959501Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959501Objects1[i].returnVariable(gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}}

}


};gdjs.Cena_9501Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Cena_9501Code.GDarvore_959501Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getAngle() <= -(5) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959501Objects1[k] = gdjs.Cena_9501Code.GDarvore_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959501Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959501Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959501Objects1[i].returnVariable(gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};gdjs.Cena_9501Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Cena_9501Code.GDarvore_959502Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getAngle() >= 5 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959502Objects1[k] = gdjs.Cena_9501Code.GDarvore_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959502Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959502Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959502Objects1[i].returnVariable(gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getVariables().getFromIndex(0)).setNumber(-(1));
}
}}

}


};gdjs.Cena_9501Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Cena_9501Code.GDarvore_959502Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getAngle() <= -(5) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959502Objects1[k] = gdjs.Cena_9501Code.GDarvore_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959502Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959502Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959502Objects1[i].returnVariable(gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};gdjs.Cena_9501Code.asyncCallback14447300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback14447300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback14448900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2);

{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback14448900(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback14454844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Box_pergunta"), gdjs.Cena_9501Code.GDBox_9595perguntaObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_certo"), gdjs.Cena_9501Code.GDbtn_9595certoObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3);

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9501Code.GDbtn_9595nextObjects3);
gdjs.copyArray(runtimeScene.getObjects("familia"), gdjs.Cena_9501Code.GDfamiliaObjects3);
{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595certoObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595certoObjects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3[i].hide();
}
for(var i = 0, len = gdjs.Cena_9501Code.GDBox_9595perguntaObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDBox_9595perguntaObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595nextObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595nextObjects3[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDfamiliaObjects3.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDfamiliaObjects3[i].hide();
}
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
/* Don't save Box_pergunta as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_certo as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_errado_01 as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_errado_02 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback14454844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback14453964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);

{ //Subevents
gdjs.Cena_9501Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
for (const obj of gdjs.Cena_9501Code.GDBox_9595perguntaObjects1) asyncObjectsList.addObject("Box_pergunta", obj);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595certoObjects1) asyncObjectsList.addObject("btn_certo", obj);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
for (const obj of gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback14453964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.asyncCallback14455852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_03", false);
}gdjs.Cena_9501Code.localVariables.length = 0;
}
gdjs.Cena_9501Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9501Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9501Code.asyncCallback14455852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9501Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9501Code.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("nuvens"), gdjs.Cena_9501Code.GDnuvensObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDCursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDnuvensObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDnuvensObjects1[i].setXOffset(gdjs.Cena_9501Code.GDnuvensObjects1[i].getXOffset() + (0.4));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("arvore_01"), gdjs.Cena_9501Code.GDarvore_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getVariableNumber(gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959501Objects1[k] = gdjs.Cena_9501Code.GDarvore_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959501Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959501Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getBehavior("Tween").addObjectAngleTween2("RotateTree_01", 10, "bounce", 2, false);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("arvore_01"), gdjs.Cena_9501Code.GDarvore_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getVariableNumber(gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getVariables().getFromIndex(0)) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959501Objects1[k] = gdjs.Cena_9501Code.GDarvore_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959501Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959501Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959501Objects1[i].getBehavior("Tween").addObjectAngleTween2("RotateTree_01", -(10), "bounce", 1, false);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("arvore_02"), gdjs.Cena_9501Code.GDarvore_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getVariableNumber(gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959502Objects1[k] = gdjs.Cena_9501Code.GDarvore_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959502Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959502Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getBehavior("Tween").addObjectAngleTween2("RotateTree_01", 10, "bounce", 2, false);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("arvore_02"), gdjs.Cena_9501Code.GDarvore_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDarvore_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getVariableNumber(gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getVariables().getFromIndex(0)) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDarvore_959502Objects1[k] = gdjs.Cena_9501Code.GDarvore_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDarvore_959502Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDarvore_959502Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDarvore_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDarvore_959502Objects1[i].getBehavior("Tween").addObjectAngleTween2("RotateTree_01", -(10), "bounce", 2, false);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9501Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9501Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9501Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9501Code.GDbtn_9595nextObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_pergunta"), gdjs.Cena_9501Code.GDBox_9595perguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9501Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[k] = gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_pergunta"), gdjs.Cena_9501Code.GDBox_9595perguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9501Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[k] = gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bola"), gdjs.Cena_9501Code.GDbolaObjects1);
{for(var i = 0, len = gdjs.Cena_9501Code.GDbolaObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbolaObjects1[i].rotate(-(30), runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbolaObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbolaObjects1[i].addForceTowardObject(gdjs.Cena_9501Code.GDbolaObjects1[i], -(20), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_pergunta"), gdjs.Cena_9501Code.GDBox_9595perguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9501Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[k] = gdjs.Cena_9501Code.GDBox_9595perguntaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].getVariableBoolean(gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9501Code.GDAcertoObjects1);
/* Reuse gdjs.Cena_9501Code.GDbtn_9595certoObjects1 */
/* Reuse gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1 */
/* Reuse gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1 */
{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].returnVariable(gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_dice.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Cena_9501Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9501Code.GDAcertoObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Cena_9501Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9501Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9501Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9501Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Cena_9501Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Cena_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_9501Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects3.length = 0;
gdjs.Cena_9501Code.GDnuvensObjects1.length = 0;
gdjs.Cena_9501Code.GDnuvensObjects2.length = 0;
gdjs.Cena_9501Code.GDnuvensObjects3.length = 0;
gdjs.Cena_9501Code.GDcidadeObjects1.length = 0;
gdjs.Cena_9501Code.GDcidadeObjects2.length = 0;
gdjs.Cena_9501Code.GDcidadeObjects3.length = 0;
gdjs.Cena_9501Code.GDfamiliaObjects1.length = 0;
gdjs.Cena_9501Code.GDfamiliaObjects2.length = 0;
gdjs.Cena_9501Code.GDfamiliaObjects3.length = 0;
gdjs.Cena_9501Code.GDarvore_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDarvore_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDarvore_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDarvore_959502Objects1.length = 0;
gdjs.Cena_9501Code.GDarvore_959502Objects2.length = 0;
gdjs.Cena_9501Code.GDarvore_959502Objects3.length = 0;
gdjs.Cena_9501Code.GDbolaObjects1.length = 0;
gdjs.Cena_9501Code.GDbolaObjects2.length = 0;
gdjs.Cena_9501Code.GDbolaObjects3.length = 0;
gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length = 0;
gdjs.Cena_9501Code.GDBox_9595perguntaObjects2.length = 0;
gdjs.Cena_9501Code.GDBox_9595perguntaObjects3.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects3.length = 0;
gdjs.Cena_9501Code.GDCursorObjects1.length = 0;
gdjs.Cena_9501Code.GDCursorObjects2.length = 0;
gdjs.Cena_9501Code.GDCursorObjects3.length = 0;
gdjs.Cena_9501Code.GDAcerto2Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto2Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto2Objects3.length = 0;
gdjs.Cena_9501Code.GDAcerto3Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto3Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto3Objects3.length = 0;
gdjs.Cena_9501Code.GDAcerto4Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto4Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto4Objects3.length = 0;
gdjs.Cena_9501Code.GDAcerto5Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto5Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto5Objects3.length = 0;

gdjs.Cena_9501Code.eventsList9(runtimeScene);
gdjs.Cena_9501Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDpainel_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9501Code.GDText_9595InstrucaoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595certoObjects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9501Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9501Code.GDbackgroundObjects3.length = 0;
gdjs.Cena_9501Code.GDnuvensObjects1.length = 0;
gdjs.Cena_9501Code.GDnuvensObjects2.length = 0;
gdjs.Cena_9501Code.GDnuvensObjects3.length = 0;
gdjs.Cena_9501Code.GDcidadeObjects1.length = 0;
gdjs.Cena_9501Code.GDcidadeObjects2.length = 0;
gdjs.Cena_9501Code.GDcidadeObjects3.length = 0;
gdjs.Cena_9501Code.GDfamiliaObjects1.length = 0;
gdjs.Cena_9501Code.GDfamiliaObjects2.length = 0;
gdjs.Cena_9501Code.GDfamiliaObjects3.length = 0;
gdjs.Cena_9501Code.GDarvore_959501Objects1.length = 0;
gdjs.Cena_9501Code.GDarvore_959501Objects2.length = 0;
gdjs.Cena_9501Code.GDarvore_959501Objects3.length = 0;
gdjs.Cena_9501Code.GDarvore_959502Objects1.length = 0;
gdjs.Cena_9501Code.GDarvore_959502Objects2.length = 0;
gdjs.Cena_9501Code.GDarvore_959502Objects3.length = 0;
gdjs.Cena_9501Code.GDbolaObjects1.length = 0;
gdjs.Cena_9501Code.GDbolaObjects2.length = 0;
gdjs.Cena_9501Code.GDbolaObjects3.length = 0;
gdjs.Cena_9501Code.GDBox_9595perguntaObjects1.length = 0;
gdjs.Cena_9501Code.GDBox_9595perguntaObjects2.length = 0;
gdjs.Cena_9501Code.GDBox_9595perguntaObjects3.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9501Code.GDAcertoObjects3.length = 0;
gdjs.Cena_9501Code.GDCursorObjects1.length = 0;
gdjs.Cena_9501Code.GDCursorObjects2.length = 0;
gdjs.Cena_9501Code.GDCursorObjects3.length = 0;
gdjs.Cena_9501Code.GDAcerto2Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto2Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto2Objects3.length = 0;
gdjs.Cena_9501Code.GDAcerto3Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto3Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto3Objects3.length = 0;
gdjs.Cena_9501Code.GDAcerto4Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto4Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto4Objects3.length = 0;
gdjs.Cena_9501Code.GDAcerto5Objects1.length = 0;
gdjs.Cena_9501Code.GDAcerto5Objects2.length = 0;
gdjs.Cena_9501Code.GDAcerto5Objects3.length = 0;


return;

}

gdjs['Cena_9501Code'] = gdjs.Cena_9501Code;
