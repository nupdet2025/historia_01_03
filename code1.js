gdjs.InstrucaoCode = {};
gdjs.InstrucaoCode.localVariables = [];
gdjs.InstrucaoCode.GDpainel_959501Objects1= [];
gdjs.InstrucaoCode.GDpainel_959501Objects2= [];
gdjs.InstrucaoCode.GDpainel_959501Objects3= [];
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1= [];
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects2= [];
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects3= [];
gdjs.InstrucaoCode.GDbtn_9595comecarObjects1= [];
gdjs.InstrucaoCode.GDbtn_9595comecarObjects2= [];
gdjs.InstrucaoCode.GDbtn_9595comecarObjects3= [];
gdjs.InstrucaoCode.GDbtn_9595certoObjects1= [];
gdjs.InstrucaoCode.GDbtn_9595certoObjects2= [];
gdjs.InstrucaoCode.GDbtn_9595certoObjects3= [];
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1= [];
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects2= [];
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects3= [];
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1= [];
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects2= [];
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects3= [];
gdjs.InstrucaoCode.GDbtn_9595nextObjects1= [];
gdjs.InstrucaoCode.GDbtn_9595nextObjects2= [];
gdjs.InstrucaoCode.GDbtn_9595nextObjects3= [];
gdjs.InstrucaoCode.GDbtn_9595beforeObjects1= [];
gdjs.InstrucaoCode.GDbtn_9595beforeObjects2= [];
gdjs.InstrucaoCode.GDbtn_9595beforeObjects3= [];
gdjs.InstrucaoCode.GDbackgroundObjects1= [];
gdjs.InstrucaoCode.GDbackgroundObjects2= [];
gdjs.InstrucaoCode.GDbackgroundObjects3= [];
gdjs.InstrucaoCode.GDNuvens_959501Objects1= [];
gdjs.InstrucaoCode.GDNuvens_959501Objects2= [];
gdjs.InstrucaoCode.GDNuvens_959501Objects3= [];
gdjs.InstrucaoCode.GDbtn_9595replayObjects1= [];
gdjs.InstrucaoCode.GDbtn_9595replayObjects2= [];
gdjs.InstrucaoCode.GDbtn_9595replayObjects3= [];
gdjs.InstrucaoCode.GDAcertoObjects1= [];
gdjs.InstrucaoCode.GDAcertoObjects2= [];
gdjs.InstrucaoCode.GDAcertoObjects3= [];
gdjs.InstrucaoCode.GDCursorObjects1= [];
gdjs.InstrucaoCode.GDCursorObjects2= [];
gdjs.InstrucaoCode.GDCursorObjects3= [];
gdjs.InstrucaoCode.GDAcerto2Objects1= [];
gdjs.InstrucaoCode.GDAcerto2Objects2= [];
gdjs.InstrucaoCode.GDAcerto2Objects3= [];
gdjs.InstrucaoCode.GDAcerto3Objects1= [];
gdjs.InstrucaoCode.GDAcerto3Objects2= [];
gdjs.InstrucaoCode.GDAcerto3Objects3= [];
gdjs.InstrucaoCode.GDAcerto4Objects1= [];
gdjs.InstrucaoCode.GDAcerto4Objects2= [];
gdjs.InstrucaoCode.GDAcerto4Objects3= [];
gdjs.InstrucaoCode.GDAcerto5Objects1= [];
gdjs.InstrucaoCode.GDAcerto5Objects2= [];
gdjs.InstrucaoCode.GDAcerto5Objects3= [];


gdjs.InstrucaoCode.asyncCallback19022516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19022516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.asyncCallback19024596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
for (const obj of gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19024596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.asyncCallback19026940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects2);

{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
for (const obj of gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19026940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.asyncCallback19029892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.InstrucaoCode.GDbackgroundObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("btn_certo"), gdjs.InstrucaoCode.GDbtn_9595certoObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects3);

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.InstrucaoCode.GDbtn_9595nextObjects3);
{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595certoObjects3.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595certoObjects3[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects3.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects3[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects3.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbackgroundObjects3[i].setTexture("assets\\background_01.png", runtimeScene);
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595nextObjects3.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595nextObjects3[i].hide(false);
}
}gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
/* Don't save btn_certo as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_errado_01 as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_errado_02 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19029892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.asyncCallback19029796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);

{ //Subevents
gdjs.InstrucaoCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
for (const obj of gdjs.InstrucaoCode.GDbtn_9595certoObjects1) asyncObjectsList.addObject("btn_certo", obj);
for (const obj of gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
for (const obj of gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19029796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.asyncCallback19031948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_02", false);
}gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19031948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.asyncCallback19033540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}gdjs.InstrucaoCode.localVariables.length = 0;
}
gdjs.InstrucaoCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.InstrucaoCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.InstrucaoCode.asyncCallback19033540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.InstrucaoCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.InstrucaoCode.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nuvens_01"), gdjs.InstrucaoCode.GDNuvens_959501Objects1);
{for(var i = 0, len = gdjs.InstrucaoCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDCursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDNuvens_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDNuvens_959501Objects1[i].setXOffset(gdjs.InstrucaoCode.GDNuvens_959501Objects1[i].getXOffset() + (0.4));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.InstrucaoCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.InstrucaoCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.InstrucaoCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.InstrucaoCode.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.InstrucaoCode.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.InstrucaoCode.GDbtn_9595nextObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_02.mp3", 2, false, 100, 1);
}{for(var i = 0, len = gdjs.InstrucaoCode.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.InstrucaoCode.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.InstrucaoCode.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.InstrucaoCode.GDbtn_9595replayObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.InstrucaoCode.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDpainel_959501Objects1[k] = gdjs.InstrucaoCode.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[k] = gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595replayObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1 */
/* Reuse gdjs.InstrucaoCode.GDbtn_9595beforeObjects1 */
/* Reuse gdjs.InstrucaoCode.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.InstrucaoCode.GDbtn_9595replayObjects1 */
/* Reuse gdjs.InstrucaoCode.GDpainel_959501Objects1 */
{for(var i = 0, len = gdjs.InstrucaoCode.GDpainel_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDpainel_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i].hide();
}
for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i].hide();
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Cena", "Effect", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.InstrucaoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.InstrucaoCode.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595certoObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.InstrucaoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.InstrucaoCode.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595certoObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.InstrucaoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.InstrucaoCode.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595certoObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[k] = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].getVariableBoolean(gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595certoObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595certoObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.InstrucaoCode.GDAcertoObjects1);
/* Reuse gdjs.InstrucaoCode.GDbtn_9595certoObjects1 */
/* Reuse gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1 */
/* Reuse gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1 */
{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].returnVariable(gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_dice.mp3", false, 300, 1);
}{for(var i = 0, len = gdjs.InstrucaoCode.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDAcertoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.InstrucaoCode.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.InstrucaoCode.GDAcertoObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.InstrucaoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.InstrucaoCode.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595nextObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595nextObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.InstrucaoCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.InstrucaoCode.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.InstrucaoCode.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.InstrucaoCode.GDbtn_9595replayObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.InstrucaoCode.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDpainel_959501Objects1[k] = gdjs.InstrucaoCode.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[k] = gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595replayObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.InstrucaoCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_replay"), gdjs.InstrucaoCode.GDbtn_9595replayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length;i<l;++i) {
    if ( gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.InstrucaoCode.GDbtn_9595replayObjects1[k] = gdjs.InstrucaoCode.GDbtn_9595replayObjects1[i];
        ++k;
    }
}
gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_02.mp3", 2, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.InstrucaoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstrucaoCode.GDpainel_959501Objects1.length = 0;
gdjs.InstrucaoCode.GDpainel_959501Objects2.length = 0;
gdjs.InstrucaoCode.GDpainel_959501Objects3.length = 0;
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length = 0;
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects2.length = 0;
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595comecarObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595comecarObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595certoObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595certoObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595nextObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595nextObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595beforeObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595beforeObjects3.length = 0;
gdjs.InstrucaoCode.GDbackgroundObjects1.length = 0;
gdjs.InstrucaoCode.GDbackgroundObjects2.length = 0;
gdjs.InstrucaoCode.GDbackgroundObjects3.length = 0;
gdjs.InstrucaoCode.GDNuvens_959501Objects1.length = 0;
gdjs.InstrucaoCode.GDNuvens_959501Objects2.length = 0;
gdjs.InstrucaoCode.GDNuvens_959501Objects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595replayObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595replayObjects3.length = 0;
gdjs.InstrucaoCode.GDAcertoObjects1.length = 0;
gdjs.InstrucaoCode.GDAcertoObjects2.length = 0;
gdjs.InstrucaoCode.GDAcertoObjects3.length = 0;
gdjs.InstrucaoCode.GDCursorObjects1.length = 0;
gdjs.InstrucaoCode.GDCursorObjects2.length = 0;
gdjs.InstrucaoCode.GDCursorObjects3.length = 0;
gdjs.InstrucaoCode.GDAcerto2Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto2Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto2Objects3.length = 0;
gdjs.InstrucaoCode.GDAcerto3Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto3Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto3Objects3.length = 0;
gdjs.InstrucaoCode.GDAcerto4Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto4Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto4Objects3.length = 0;
gdjs.InstrucaoCode.GDAcerto5Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto5Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto5Objects3.length = 0;

gdjs.InstrucaoCode.eventsList7(runtimeScene);
gdjs.InstrucaoCode.GDpainel_959501Objects1.length = 0;
gdjs.InstrucaoCode.GDpainel_959501Objects2.length = 0;
gdjs.InstrucaoCode.GDpainel_959501Objects3.length = 0;
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects1.length = 0;
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects2.length = 0;
gdjs.InstrucaoCode.GDText_9595InstrucaoObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595comecarObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595comecarObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595comecarObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595certoObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595certoObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595certoObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595nextObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595nextObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595nextObjects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595beforeObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595beforeObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595beforeObjects3.length = 0;
gdjs.InstrucaoCode.GDbackgroundObjects1.length = 0;
gdjs.InstrucaoCode.GDbackgroundObjects2.length = 0;
gdjs.InstrucaoCode.GDbackgroundObjects3.length = 0;
gdjs.InstrucaoCode.GDNuvens_959501Objects1.length = 0;
gdjs.InstrucaoCode.GDNuvens_959501Objects2.length = 0;
gdjs.InstrucaoCode.GDNuvens_959501Objects3.length = 0;
gdjs.InstrucaoCode.GDbtn_9595replayObjects1.length = 0;
gdjs.InstrucaoCode.GDbtn_9595replayObjects2.length = 0;
gdjs.InstrucaoCode.GDbtn_9595replayObjects3.length = 0;
gdjs.InstrucaoCode.GDAcertoObjects1.length = 0;
gdjs.InstrucaoCode.GDAcertoObjects2.length = 0;
gdjs.InstrucaoCode.GDAcertoObjects3.length = 0;
gdjs.InstrucaoCode.GDCursorObjects1.length = 0;
gdjs.InstrucaoCode.GDCursorObjects2.length = 0;
gdjs.InstrucaoCode.GDCursorObjects3.length = 0;
gdjs.InstrucaoCode.GDAcerto2Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto2Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto2Objects3.length = 0;
gdjs.InstrucaoCode.GDAcerto3Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto3Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto3Objects3.length = 0;
gdjs.InstrucaoCode.GDAcerto4Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto4Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto4Objects3.length = 0;
gdjs.InstrucaoCode.GDAcerto5Objects1.length = 0;
gdjs.InstrucaoCode.GDAcerto5Objects2.length = 0;
gdjs.InstrucaoCode.GDAcerto5Objects3.length = 0;


return;

}

gdjs['InstrucaoCode'] = gdjs.InstrucaoCode;
