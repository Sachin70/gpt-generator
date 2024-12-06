import JSZip from "jszip";

export async function generateScormPackage(content: string): Promise<Blob> {
  const zip = new JSZip();

  const manifest = `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="com.scorm.example" version="1"
   xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
   xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 
   ims_xml.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 
   adlcp_rootv1p2.xsd">
   <organizations default="org1">
      <organization identifier="org1">
         <title>SCORM Package</title>
         <item identifier="item1" identifierref="res1">
            <title>Generated Content</title>
         </item>
      </organization>
   </organizations>
   <resources>
      <resource identifier="res1" type="webcontent" href="content.html">
         <file href="content.html"/>
      </resource>
   </resources>
</manifest>
`;

  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>SCORM Content</title>
</head>
<body>
  <div>${content}</div>
</body>
</html>`;

  zip.file("imsmanifest.xml", manifest);
  zip.file("content.html", htmlContent);

  // Wait for the ZIP generation to finish
  const blob = await zip.generateAsync({ type: "blob" });
  return blob;
}
