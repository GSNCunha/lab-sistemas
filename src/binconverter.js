export function converter(value, led)
{
    let bin = 100000111;
    if(value != 0)
    {
        bin += 10000000;
    }
    if(led == 2 || led == 4)
    {
        bin += 100000;
    }
    if( led == 3 || led == 4)
    {
        bin += 1000000;
    }
    if(value == 50 || value == 100)
    {
        bin += 1000;
    }
    if( value == 75 || value == 100)
    {
        bin += 10000;
    }
    return addStart(withoutFirstChar(bin.toString()), "0");   
}

function withoutFirstChar(string)//return the string without the first char
{
    return sliceBefore(string,1);
}

function sliceBefore(string, index)//return the string after the index
{
    return string.slice(index);
}
function addStart(string, char)
{
    return  char + string;
}