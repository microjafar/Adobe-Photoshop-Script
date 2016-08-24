var doc = app.activeDocument; //active document
var jpegQuality = 12; //Image Quality
var folderPath = "C:/Users/micro/Downloads/"; //folder view its changable
var imageName = "image.jpg"; //Image name to save its changable
var filePath = folderPath + imageName;

saveJPEG(doc, new File(filePath), jpegQuality);

function saveJPEG(doc, path, qty ) {  
     var saveOptions = new JPEGSaveOptions( );  
     saveOptions.embedColorProfile = true;  
     saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;  
     saveOptions.matte = MatteType.NONE;  
     saveOptions.quality = qty;   
     doc.saveAs( path, saveOptions, true );  
}  