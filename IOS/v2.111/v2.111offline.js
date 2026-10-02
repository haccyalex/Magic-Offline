const base = Process.getModuleByName("libg.so").base;
const LogicDefines_OFFLINE_MODE = 0x2C69C9
const TestName = 0x228C71
base.add(LogicDefines_OFFLINE_MODE).writeU8(1);
Memory.protect(base.add(TestName), 128, "rwx");
base.add(TestName).writeUtf8String("haccyalex");
