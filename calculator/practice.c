#include <stdio.h>
int main()
{
    int a=1,b=2,c=3;
    if(a>b && a>c)
    {
        printf("a is greater");
    }
    else if(b>a && b>c)
    {
        printf("b is greater");
    }
    else{
        printf("c is greater")
    }
    return 0;

}