using System;
using System.Collections.Generic;

namespace ObjectPoolExample {
    public class ObjectPool {
        private static ObjectPool _instance;
        private readonly List<ReusableObject> _availableObjects = new List<ReusableObject>();
        private readonly List<ReusableObject> _usedObjects = new List<ReusableObject>();
        private readonly int _maxPoolSize = 10;

        private ObjectPool() { }

        public static ObjectPool Instance => _instance ??= new ObjectPool();

        public ReusableObject GetObject() {
            lock (_availableObjects) {
                ReusableObject reusableObject;
                if (_availableObjects.Count > 0) {
                    reusableObject = _availableObjects[0];
                    _availableObjects.RemoveAt(0);
                    Console.WriteLine($"ReusableObject {reusableObject.ID} checked out from pool.");
                } else if (_usedObjects.Count < _maxPoolSize){
                    reusableObject = new ReusableObject();
                } else{
                    throw new InvalidOperationException("No more objects available in the pool.");
                }

                _usedObjects.Add(reusableObject);
                return reusableObject;
            }
        }

        public void ReleaseObject(ReusableObject reusableObject){
            lock (_availableObjects){
                _usedObjects.Remove(reusableObject);
                _availableObjects.Add(reusableObject);
                Console.WriteLine($"ReusableObject {reusableObject.ID} returned to pool.");
            }
        }

        public void CleanUp(){
            lock (_availableObjects)
            {
                Console.WriteLine("Cleaning up unused objects.");
                _availableObjects.Clear();
            }
        }
    }
}
