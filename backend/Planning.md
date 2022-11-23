## Endpoints

- **/login** --> Verification with our MongoDB data then jwt token return

- **/register** --> Post request to add user

- **/products** --> get all products with filteration


## cart data
### 
- **/cart** --> cart id associated with every user 

```
{
    _id: mongodb id,
    userid: unique user id,
    product_ids: [
        different product ids as array
    ]
}

// will populate work in this
```


## product history
- **/history** --> history id associated with every user 

```
{
    _id: mongodb id,
    userid: unique user id,
    product_ids: [
        different product ids as array
    ]
}
```


## Admin Section
- **/admin** --> 
### Get all products which are in carts of user
### Get all product user bought
### stock key present in products to track stocks




