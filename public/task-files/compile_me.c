#include <stdio.h>

int main() {
    char str[] = {
        0x64, 0x63, 0x62, 0x43, 0x54, 0x46, 0x7b, 0x6c,
        0x30, 0x77, 0x65, 0x73, 0x74, 0x5f, 0x6f, 0x66,
        0x5f, 0x74, 0x68, 0x33, 0x5f, 0x68, 0x31, 0x67,
        0x68, 0x7d, 0x00
    };

    for (int i = 0; str[i] != '\0'; i++) {
        putchar(str[i]);
    }

    putchar('\n');
    return 0;
}