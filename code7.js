gdjs.Cena_9506Code = {};
gdjs.Cena_9506Code.localVariables = [];
gdjs.Cena_9506Code.GDpainel_959501Objects1= [];
gdjs.Cena_9506Code.GDpainel_959501Objects2= [];
gdjs.Cena_9506Code.GDText_9595InstrucaoObjects1= [];
gdjs.Cena_9506Code.GDText_9595InstrucaoObjects2= [];
gdjs.Cena_9506Code.GDbtn_9595comecarObjects1= [];
gdjs.Cena_9506Code.GDbtn_9595comecarObjects2= [];
gdjs.Cena_9506Code.GDbtn_9595certoObjects1= [];
gdjs.Cena_9506Code.GDbtn_9595certoObjects2= [];
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Cena_9506Code.GDbtn_9595nextObjects1= [];
gdjs.Cena_9506Code.GDbtn_9595nextObjects2= [];
gdjs.Cena_9506Code.GDbackgroundObjects1= [];
gdjs.Cena_9506Code.GDbackgroundObjects2= [];
gdjs.Cena_9506Code.GDNuvensObjects1= [];
gdjs.Cena_9506Code.GDNuvensObjects2= [];
gdjs.Cena_9506Code.GDFamiliaObjects1= [];
gdjs.Cena_9506Code.GDFamiliaObjects2= [];
gdjs.Cena_9506Code.GDSeagulObjects1= [];
gdjs.Cena_9506Code.GDSeagulObjects2= [];
gdjs.Cena_9506Code.GDaviaoObjects1= [];
gdjs.Cena_9506Code.GDaviaoObjects2= [];
gdjs.Cena_9506Code.GDSeagul2Objects1= [];
gdjs.Cena_9506Code.GDSeagul2Objects2= [];
gdjs.Cena_9506Code.GDBox_9595perguntaObjects1= [];
gdjs.Cena_9506Code.GDBox_9595perguntaObjects2= [];
gdjs.Cena_9506Code.GDAcertoObjects1= [];
gdjs.Cena_9506Code.GDAcertoObjects2= [];
gdjs.Cena_9506Code.GDCursorObjects1= [];
gdjs.Cena_9506Code.GDCursorObjects2= [];
gdjs.Cena_9506Code.GDAcerto2Objects1= [];
gdjs.Cena_9506Code.GDAcerto2Objects2= [];
gdjs.Cena_9506Code.GDAcerto3Objects1= [];
gdjs.Cena_9506Code.GDAcerto3Objects2= [];
gdjs.Cena_9506Code.GDAcerto4Objects1= [];
gdjs.Cena_9506Code.GDAcerto4Objects2= [];
gdjs.Cena_9506Code.GDAcerto5Objects1= [];
gdjs.Cena_9506Code.GDAcerto5Objects2= [];


gdjs.Cena_9506Code.asyncCallback30798116 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9506Code.localVariables.length = 0;
}
gdjs.Cena_9506Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
for (const obj of gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9506Code.asyncCallback30798116(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9506Code.asyncCallback30802060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2);

{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Cena_9506Code.localVariables.length = 0;
}
gdjs.Cena_9506Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
for (const obj of gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Cena_9506Code.asyncCallback30802060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9506Code.asyncCallback30805820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Box_pergunta"), gdjs.Cena_9506Code.GDBox_9595perguntaObjects2);

gdjs.copyArray(runtimeScene.getObjects("Familia"), gdjs.Cena_9506Code.GDFamiliaObjects2);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Cena_9506Code.GDbackgroundObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("btn_certo"), gdjs.Cena_9506Code.GDbtn_9595certoObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2);

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9506Code.GDbtn_9595nextObjects2);
{for(var i = 0, len = gdjs.Cena_9506Code.GDFamiliaObjects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDFamiliaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595certoObjects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595certoObjects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2[i].hide();
}
for(var i = 0, len = gdjs.Cena_9506Code.GDBox_9595perguntaObjects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDBox_9595perguntaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbackgroundObjects2[i].setTexture("assets\\background_cena_05_vazio.jpg", runtimeScene);
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595nextObjects2.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595nextObjects2[i].hide(false);
}
}gdjs.Cena_9506Code.localVariables.length = 0;
}
gdjs.Cena_9506Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
for (const obj of gdjs.Cena_9506Code.GDBox_9595perguntaObjects1) asyncObjectsList.addObject("Box_pergunta", obj);
for (const obj of gdjs.Cena_9506Code.GDbtn_9595certoObjects1) asyncObjectsList.addObject("btn_certo", obj);
for (const obj of gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
for (const obj of gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Cena_9506Code.asyncCallback30805820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9506Code.asyncCallback30808300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instrucao_02", false);
}gdjs.Cena_9506Code.localVariables.length = 0;
}
gdjs.Cena_9506Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Cena_9506Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Cena_9506Code.asyncCallback30808300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Cena_9506Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9506Code.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Seagul"), gdjs.Cena_9506Code.GDSeagulObjects1);
gdjs.copyArray(runtimeScene.getObjects("Seagul2"), gdjs.Cena_9506Code.GDSeagul2Objects1);
{for(var i = 0, len = gdjs.Cena_9506Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDCursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDSeagulObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDSeagulObjects1[i].addForceTowardPosition(2051, 69, 200, 0);
}
for(var i = 0, len = gdjs.Cena_9506Code.GDSeagul2Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDSeagul2Objects1[i].addForceTowardPosition(2051, 69, 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Cena_9506Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Cena_9506Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Cena_9506Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9506Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9506Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9506Code.GDbtn_9595nextObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\seagul.mp3", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9506Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_pergunta"), gdjs.Cena_9506Code.GDBox_9595perguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9506Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[k] = gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9506Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_pergunta"), gdjs.Cena_9506Code.GDBox_9595perguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9506Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[k] = gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Cena_9506Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box_pergunta"), gdjs.Cena_9506Code.GDBox_9595perguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Cena_9506Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[k] = gdjs.Cena_9506Code.GDBox_9595perguntaObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].getVariableBoolean(gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595certoObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Cena_9506Code.GDAcertoObjects1);
/* Reuse gdjs.Cena_9506Code.GDbtn_9595certoObjects1 */
/* Reuse gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1 */
/* Reuse gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1 */
{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].returnVariable(gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_dice.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Cena_9506Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDAcertoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Cena_9506Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Cena_9506Code.GDAcertoObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Cena_9506Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Cena_9506Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Cena_9506Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Cena_9506Code.GDbtn_9595nextObjects1[k] = gdjs.Cena_9506Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Cena_9506Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Cena_9506Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_9506Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9506Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9506Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9506Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9506Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9506Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9506Code.GDNuvensObjects1.length = 0;
gdjs.Cena_9506Code.GDNuvensObjects2.length = 0;
gdjs.Cena_9506Code.GDFamiliaObjects1.length = 0;
gdjs.Cena_9506Code.GDFamiliaObjects2.length = 0;
gdjs.Cena_9506Code.GDSeagulObjects1.length = 0;
gdjs.Cena_9506Code.GDSeagulObjects2.length = 0;
gdjs.Cena_9506Code.GDaviaoObjects1.length = 0;
gdjs.Cena_9506Code.GDaviaoObjects2.length = 0;
gdjs.Cena_9506Code.GDSeagul2Objects1.length = 0;
gdjs.Cena_9506Code.GDSeagul2Objects2.length = 0;
gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length = 0;
gdjs.Cena_9506Code.GDBox_9595perguntaObjects2.length = 0;
gdjs.Cena_9506Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9506Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9506Code.GDCursorObjects1.length = 0;
gdjs.Cena_9506Code.GDCursorObjects2.length = 0;
gdjs.Cena_9506Code.GDAcerto2Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto2Objects2.length = 0;
gdjs.Cena_9506Code.GDAcerto3Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto3Objects2.length = 0;
gdjs.Cena_9506Code.GDAcerto4Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto4Objects2.length = 0;
gdjs.Cena_9506Code.GDAcerto5Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto5Objects2.length = 0;

gdjs.Cena_9506Code.eventsList4(runtimeScene);
gdjs.Cena_9506Code.GDpainel_959501Objects1.length = 0;
gdjs.Cena_9506Code.GDpainel_959501Objects2.length = 0;
gdjs.Cena_9506Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Cena_9506Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Cena_9506Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Cena_9506Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Cena_9506Code.GDbackgroundObjects1.length = 0;
gdjs.Cena_9506Code.GDbackgroundObjects2.length = 0;
gdjs.Cena_9506Code.GDNuvensObjects1.length = 0;
gdjs.Cena_9506Code.GDNuvensObjects2.length = 0;
gdjs.Cena_9506Code.GDFamiliaObjects1.length = 0;
gdjs.Cena_9506Code.GDFamiliaObjects2.length = 0;
gdjs.Cena_9506Code.GDSeagulObjects1.length = 0;
gdjs.Cena_9506Code.GDSeagulObjects2.length = 0;
gdjs.Cena_9506Code.GDaviaoObjects1.length = 0;
gdjs.Cena_9506Code.GDaviaoObjects2.length = 0;
gdjs.Cena_9506Code.GDSeagul2Objects1.length = 0;
gdjs.Cena_9506Code.GDSeagul2Objects2.length = 0;
gdjs.Cena_9506Code.GDBox_9595perguntaObjects1.length = 0;
gdjs.Cena_9506Code.GDBox_9595perguntaObjects2.length = 0;
gdjs.Cena_9506Code.GDAcertoObjects1.length = 0;
gdjs.Cena_9506Code.GDAcertoObjects2.length = 0;
gdjs.Cena_9506Code.GDCursorObjects1.length = 0;
gdjs.Cena_9506Code.GDCursorObjects2.length = 0;
gdjs.Cena_9506Code.GDAcerto2Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto2Objects2.length = 0;
gdjs.Cena_9506Code.GDAcerto3Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto3Objects2.length = 0;
gdjs.Cena_9506Code.GDAcerto4Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto4Objects2.length = 0;
gdjs.Cena_9506Code.GDAcerto5Objects1.length = 0;
gdjs.Cena_9506Code.GDAcerto5Objects2.length = 0;


return;

}

gdjs['Cena_9506Code'] = gdjs.Cena_9506Code;
