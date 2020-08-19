using System;


public abstract class Employee
{
    protected string name;
    protected double salary;
    public Employee()
    {

    }
    public Employee(string name, double salary)
    {
        this.name = name;
        this.salary = salary;

    }
    public void print()
    {
        System.Console.WriteLine(name + salary);
        //System.Console.WriteLine( );
    }
}
interface IIncrementable
{
    public double increment();
}
class Programmer : Employee, IIncrementable
{
    protected string domain;

    public Programmer(string domain)
    {
        this.domain = domain;
    }
    public Programmer(string name, double salary, string domain)
    {
        this.domain = domain;
        this.salary = salary;
        this.name = name;

    }
    public double increment()
    {
        return this.salary = salary * 1.1;
    }
}
class Manager : Employee, IIncrementable
{
    private int teamId;

    public Manager(int teamId)
    {
        this.teamId = teamId;
    }

    public Manager(string name, double salary, int teamId)
    {
        this.name = name;
        this.salary = salary;
        this.teamId = teamId;
    }
    public double increment()
    {
        return this.salary = salary * 1.5;
    }

}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter the details of manager");
        string n = Console.ReadLine();
        double salm = Convert.ToDouble(Console.ReadLine());
        int tm = Convert.ToInt32(Console.ReadLine());
        System.Console.WriteLine("Enter the details of programmer");
        string n2 = Console.ReadLine();
        double salp = Convert.ToDouble(Console.ReadLine());
        string dom = Console.ReadLine();
        Manager m = new Manager(n, salm, tm);
        Programmer p = new Programmer(n2, salp, dom);
        //System.Console.WriteLine(m.increment());

        System.Console.WriteLine("Name:" + n);
        System.Console.WriteLine("Salary:" + m.increment());
        System.Console.WriteLine("Name:" + n2);
        System.Console.WriteLine("Salary:" + p.increment());

    }
}

