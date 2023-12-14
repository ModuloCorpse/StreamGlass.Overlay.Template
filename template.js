class TemplateModule extends StreamGlassModule
{
	constructor() { super('template'); }

	Init()
	{
		
	}
}

var streamGlassModuleClient;

function OnLoad()
{
	streamGlassModuleClient = new TemplateModule();
}