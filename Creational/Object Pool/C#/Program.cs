using System;
using System.Threading;

namespace ObjectPoolExample {
    class Program {
        static void Main(string[] args) {
            var pool = ObjectPool.Instance;

            ReusableObject obj1 = pool.GetObject();
            obj1.DoWork();

            ReusableObject obj2 = pool.GetObject();
            obj2.DoWork();

            pool.ReleaseObject(obj1);

            ReusableObject obj3 = pool.GetObject(); // This should reuse obj1
            obj3.DoWork();

            pool.ReleaseObject(obj2);
            pool.ReleaseObject(obj3);

            pool.CleanUp(); // Clean up unused objects

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
