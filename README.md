# Ctodo

Ctodo is a simple and lightweight console-based task management application. It allows you to manage your tasks directly from your terminal. This application is designed to work on Linux operating systems.


## Installation and Setup

To install Ctodo, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/utsavbhattarai007/ctodo
    ```

2. Navigate to the project directory:

    ```bash
    cd ctodo/cli/config
    ```

3. Run the setup script:

    ```bash
    ./linux.sh
    ```

> The setup script will automatically move the compiled ctodo file to a directory in your PATH for easy access.


## Commands

Ctodo supports the following commands:

- `add <description>`: Add a new task to your todo list.
- `delete <index>`: Delete the task at the specified index.
- `done <index>`: Mark the task at the specified index as done
- `undone <index>`: Mark the task at the specified index as not done.
- `list [-t]`: List all tasks. Use the -t option to show creation and completion times.
- `help`: Print usage information.
- `aboutus`: Display information about the developers.


## Note
Ctodo is currently only available for Linux operating systems. Support for other operating systems may be added in the future.


## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.