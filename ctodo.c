#include <stdio.h>

int main(int argc, char *argv[])
{
    // Check if there are command-line arguments
    if (argc < 2)
    {
        printf("Usage: ctodo <command>\n\n", argv[0]);
        return 1; // Return an error code
    }

    // Print a greeting message with the provided name
    printf("Hi %s!, Program is under-developement", argv[1]);

    return 0; // Return success
}
