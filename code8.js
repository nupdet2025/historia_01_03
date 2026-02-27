gdjs.Instrucao_9502Code = {};
gdjs.Instrucao_9502Code.localVariables = [];
gdjs.Instrucao_9502Code.GDpainel_959501Objects1= [];
gdjs.Instrucao_9502Code.GDpainel_959501Objects2= [];
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1= [];
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects2= [];
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1= [];
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects2= [];
gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1= [];
gdjs.Instrucao_9502Code.GDbtn_9595certoObjects2= [];
gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Instrucao_9502Code.GDbtn_9595nextObjects1= [];
gdjs.Instrucao_9502Code.GDbtn_9595nextObjects2= [];
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1= [];
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects2= [];
gdjs.Instrucao_9502Code.GDbackgroundObjects1= [];
gdjs.Instrucao_9502Code.GDbackgroundObjects2= [];
gdjs.Instrucao_9502Code.GDNuvens_959501Objects1= [];
gdjs.Instrucao_9502Code.GDNuvens_959501Objects2= [];
gdjs.Instrucao_9502Code.GDAcertoObjects1= [];
gdjs.Instrucao_9502Code.GDAcertoObjects2= [];
gdjs.Instrucao_9502Code.GDCursorObjects1= [];
gdjs.Instrucao_9502Code.GDCursorObjects2= [];
gdjs.Instrucao_9502Code.GDAcerto2Objects1= [];
gdjs.Instrucao_9502Code.GDAcerto2Objects2= [];
gdjs.Instrucao_9502Code.GDAcerto3Objects1= [];
gdjs.Instrucao_9502Code.GDAcerto3Objects2= [];
gdjs.Instrucao_9502Code.GDAcerto4Objects1= [];
gdjs.Instrucao_9502Code.GDAcerto4Objects2= [];
gdjs.Instrucao_9502Code.GDAcerto5Objects1= [];
gdjs.Instrucao_9502Code.GDAcerto5Objects2= [];


gdjs.Instrucao_9502Code.asyncCallback30885548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Instrucao_9502Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_07", false);
}gdjs.Instrucao_9502Code.localVariables.length = 0;
}
gdjs.Instrucao_9502Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Instrucao_9502Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Instrucao_9502Code.asyncCallback30885548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Instrucao_9502Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Instrucao_9502Code.GDCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nuvens_01"), gdjs.Instrucao_9502Code.GDNuvens_959501Objects1);
{for(var i = 0, len = gdjs.Instrucao_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDCursorObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDNuvens_959501Objects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDNuvens_959501Objects1[i].setXOffset(gdjs.Instrucao_9502Code.GDNuvens_959501Objects1[i].getXOffset() + (0.4));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Instrucao_9502Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Instrucao_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Instrucao_9502Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Instrucao_9502Code.GDbtn_9595nextObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio_03.mp3", 4, false, 100, 1);
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1[i].hide();
}
for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.Instrucao_9502Code.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Instrucao_9502Code.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.Instrucao_9502Code.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Instrucao_9502Code.GDpainel_959501Objects1[k] = gdjs.Instrucao_9502Code.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.Instrucao_9502Code.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1[k] = gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[k] = gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1[k] = gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[k] = gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1 */
/* Reuse gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1 */
/* Reuse gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Instrucao_9502Code.GDpainel_959501Objects1 */
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 4, 0, 1);
}{for(var i = 0, len = gdjs.Instrucao_9502Code.GDpainel_959501Objects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDpainel_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1[i].hide();
}
for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1[i].hide();
}
for(var i = 0, len = gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1.length ;i < len;++i) {
    gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1[i].hide();
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Cena", "Effect", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 4, 0, 1);
}
{ //Subevents
gdjs.Instrucao_9502Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Instrucao_9502Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Instrucao_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Instrucao_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbackgroundObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbackgroundObjects2.length = 0;
gdjs.Instrucao_9502Code.GDNuvens_959501Objects1.length = 0;
gdjs.Instrucao_9502Code.GDNuvens_959501Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcertoObjects1.length = 0;
gdjs.Instrucao_9502Code.GDAcertoObjects2.length = 0;
gdjs.Instrucao_9502Code.GDCursorObjects1.length = 0;
gdjs.Instrucao_9502Code.GDCursorObjects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto2Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto2Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto3Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto3Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto4Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto4Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto5Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto5Objects2.length = 0;

gdjs.Instrucao_9502Code.eventsList1(runtimeScene);
gdjs.Instrucao_9502Code.GDpainel_959501Objects1.length = 0;
gdjs.Instrucao_9502Code.GDpainel_959501Objects2.length = 0;
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Instrucao_9502Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbtn_9595beforeObjects2.length = 0;
gdjs.Instrucao_9502Code.GDbackgroundObjects1.length = 0;
gdjs.Instrucao_9502Code.GDbackgroundObjects2.length = 0;
gdjs.Instrucao_9502Code.GDNuvens_959501Objects1.length = 0;
gdjs.Instrucao_9502Code.GDNuvens_959501Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcertoObjects1.length = 0;
gdjs.Instrucao_9502Code.GDAcertoObjects2.length = 0;
gdjs.Instrucao_9502Code.GDCursorObjects1.length = 0;
gdjs.Instrucao_9502Code.GDCursorObjects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto2Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto2Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto3Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto3Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto4Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto4Objects2.length = 0;
gdjs.Instrucao_9502Code.GDAcerto5Objects1.length = 0;
gdjs.Instrucao_9502Code.GDAcerto5Objects2.length = 0;


return;

}

gdjs['Instrucao_9502Code'] = gdjs.Instrucao_9502Code;
