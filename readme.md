# dshop

## Data Modeling

### #GOODS

```javascript
const Category = {
    main : string,
    sub  : [{ name : string, value: string}]
}

const ListItem = {
    name        :    string,
    description :    html,
    images      :    [url, max 4],
    quantity    :    number,
    pricing     :    {  regular_price : number, special_price: number },
    sku         :    string,
    details     :    [{ name : string, value: string || number}]
}

const Inventory = {
      category      :   objectId,
      list_items    :   [ListItem],
      variants      :   [ListItem]
}



```
