// v7.1.1 offline
var hook = Interceptor.attach(Module.findExportByName("libc.so", "__cxa_atexit"), {
    onEnter: function () {
        var base = Module.findBaseAddress("libg.so");

        if (!base) {
            return;
        }

        hook.detach();

        Memory.protect(ptr(base.add(0x157636)), 38, "rwx");
        Memory.protect(ptr(base.add(0x15763a)), 38, "rwx");
        Memory.protect(ptr(base.add(0x2245b7)), 38, "rwx");
        Memory.protect(ptr(base.add(0x2245ba)), 38, "rwx");
        Memory.protect(ptr(base.add(0x2245ae)), 38, "rwx");
        Memory.protect(ptr(base.add(0x224465)), 38, "rwx");
        Memory.protect(ptr(base.add(0x224479)), 0, "rwx");
        Memory.protect(ptr(base.add(0x22d657)), 38, "rwx");
        Memory.protect(ptr(base.add(0x2242f0)), 38, "rwx");
        Memory.protect(ptr(base.add(0x226db5)), 38, "rwx");
        Memory.protect(ptr(base.add(0x226dc0)), 38, "rwx");
        Memory.protect(ptr(base.add(0x2246fc)), 38, "rwx");
        Memory.protect(ptr(base.add(0x2fdb8c)), 38, "rwx");
        Memory.protect(ptr(base.add(0x22d1ef)), 38, "rwx");

        ptr(base.add(0x2a11b6)).writeU8(1);
        ptr(base.add(0x224465)).writeU8(1);
        ptr(base.add(0x224479)).writeU8(0);

        ptr(base.add(0x2245b7)).writeUtf8String("IL");
        ptr(base.add(0x2245ba)).writeUtf8String("Mr Vitalik %i");
        ptr(base.add(0x2245ae)).writeUtf8String("Antz %i");
        ptr(base.add(0x224465)).writeUtf8String("Mr Vitalik");
        ptr(base.add(0x224479)).writeUtf8String("Vitalik's Team");
        ptr(base.add(0x22d657)).writeUtf8String("Subscribe to Mr Vitalik's channel");
        ptr(base.add(0x2242f0)).writeUtf8String("Vitaliks Team");
        ptr(base.add(0x226db5)).writeUtf8String("Mr Vitalik");
        ptr(base.add(0x226dc0)).writeUtf8String("Mr Vitalik");
        ptr(base.add(0x2246fc)).writeUtf8String("HuzaBruh %i");
        ptr(base.add(0x22d515)).writeUtf8String("SEMPAI");
        ptr(base.add(0x22d1ef)).writeUtf8String("PhoenixFire");
    }
});