let nota1,nota2,nota3,nota4,nota5,promedio;
nota1 =  parseFloat(prompt("Ingrese nota 1"));
nota2 =  parseFloat(prompt("Ingrese nota 2"));
nota3 =  parseFloat(prompt("Ingrese nota 3"));
nota4 =  parseFloat(prompt("Ingrese nota 4"));
nota5 =  parseFloat(prompt("Ingrese nota 5"));
promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;

if (promedio >= 76){
    document.write("El promedio es " +promedio+ " APROBASTE!!" );
}
else (promedio <=75);{
    document.write("El promedio es " +promedio+ " REPROBASTE!!");
}
