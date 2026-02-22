# Day 01 Tasks

# Q1

```mermaid
classDiagram
    class IAccount {
        <<interface>>
        Date_of_opening
        addCustomer()
        removeCustomer()
    }

    class Account {
        Acc_no
        Balance
        debitAmount()
        creditAmount()
        getBalance()
    }

    class Saving_Account {
        Min_Balance
    }

    class Current_Account {
        Interest_rate
    }

    %% Inheritance relationships (Solid line with hollow triangle)
    Account <|-- Saving_Account
    Account <|-- Current_Account

    %% Interface implementation relationships (Dashed line with hollow triangle)
    IAccount <|.. Saving_Account
    IAccount <|.. Current_Account
```
# Q2

1.	Create an object that takes `Admin` and `User` as a keys and have a values as `id` , `firstName` , `lastName`, `Password` and `age` 
2.	Create an object that has all the previous properties without `age` 
3.	Create an object that all the previous properties are optional and make them read-only
