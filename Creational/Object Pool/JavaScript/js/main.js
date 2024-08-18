import { ObjectPool } from './ObjectPool.js';

const pool = new ObjectPool();

const obj1 = pool.getObject();
obj1.doWork();

const obj2 = pool.getObject();
obj2.doWork();

pool.releaseObject(obj1);

const obj3 = pool.getObject(); // This should reuse obj1
obj3.doWork();

pool.releaseObject(obj2);
pool.releaseObject(obj3);

pool.cleanUp(); // Clean up unused objects
