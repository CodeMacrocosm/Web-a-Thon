import java.util.*;
class Fibonacci
{
    public static void main()  //main function
    {
        Fibonacci obj = new Fibonacci();
        Scanner in = new Scanner(System.in);
        System.out.println("Enter no of term ="); //accepting no. of terms
        int n = in.nextInt();
        System.out.println();
       for(int i=1;i<=n;i++) //Fibonacci element display loop
       {
           int f = obj.fib(i);
           System.out.print(f+" ");
       }
    }
    public int fib(int n) //Recursive function fib() for calculation of Fibonacci element
    {
       if(n<=1)
       return n;
       else
       return (fib(n-1) +fib(n-2)); 
     }
}
