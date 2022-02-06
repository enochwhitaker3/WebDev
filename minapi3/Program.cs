var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

int total = 0;

string DoSomething(int id = 1)
{
    total +=id;
    return $"Hello World {id}, {total}";
}
app.MapGet("/", DoSomething);

app.Run();
