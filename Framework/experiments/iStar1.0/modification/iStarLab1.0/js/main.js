$(document).ready(function () {
    istar.setupModel();
    istar.setupDiagram();
    istar.setupMetamodel(istar.metamodel);
    ui.setupUi();
    istar.examples.loadExample();
    ui.selectModel();//clear selection
});
