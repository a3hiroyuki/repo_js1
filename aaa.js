var shell = WScript.CreateObject("WScript.Shell");
var fs = WScript.CreateObject( "Scripting.FileSystemObject" );
fs.CopyFile("aaa.txt", "bbb.txt");
//var objExec = shell.Exec("cmd /c dir");
var objExec = shell.Exec("cmd /c git clone https://github.com/a3hiroyuki/FireBase100.git");
while(objExec.status == 0){
     WScript.sleep(100);
}
WScript.Echo('aa');
WScript.echo(objExec.stdOut.readAll());
while(!objExec.StdOut.AtEndOfStream) {
	WScript.Echo(objExec.StdOut.ReadLine());
	WScript.Echo('bb');
}