import { MongoClient } from 'mongodb'

const myDB = {
    server: 'localhost',
    port: 27017,
}
const uri = `mongodb://${myDB.server}:${myDB.port}`;
const client = new MongoClient(uri);

try {
    await client.connect()
    if (!client.db('admin').command({ "ping": 1 }))
        throw Error("Erro ao conectar ao banco !!")
    console.log('Conectado!')


    //OPERADORES DE ATUALIZAÇÃO
    //Exemplo SET
    // const filter = {id_prod:111};
    // const newProduto = {
    //     preco: 5500
    // }

    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.updateOne(
    //     filter,
    //     {$set:newProduto}
    // );
    // console.log(resultado)

    // //Exemplo INC
    // const filter = {id_prod:111};
    // const newProduto = {
    //     qtd_estoque: 100
    // }

    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.updateOne(
    //     filter,
    //     {$inc:newProduto}
    // );
    // console.log(resultado)

    //Exemplo INC DECREMENTO
    // const filter = {id_prod:111};
    // const newProduto = {
    //     qtd_estoque: -2
    // }

    //Exemplo RENAME
    // const filter = {id_prod:111};
    // const newProduto = {
    //     qtd_estoque: 'qtdEstoque',
    //     preco: 'price'
    // }
    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.updateOne(
    //     filter,
    //     {$rename:newProduto}
    // );
    // console.log(resultado)


    //Exemplo UNSET
    // const filter = {id_prod:111};
    // const newProduto = {
    //     importado:""//o valor do campo não é importante.
    // }
    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.updateOne(
    //     filter,
    //     {$unset:newProduto}
    // );
    // console.log(resultado)

    //Exemplo MUL
    // const filter = {id_prod:111};
    // const newProduto = {
    //     price:0.9//reduzir em 10% o preco do produto
    // }
    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.updateOne(
    //     filter,
    //     {$mul:newProduto}
    // );
    // console.log(resultado)

    //Exemplo UpdateMany
    // const filter = {preco:{$lt:5000}};
    // const newProduto = {
    //     preco:0.9//reduzir em 10% o preco do produto
    // }
    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.updateMany(
    //     filter,
    //     {$mul:newProduto}
    // );
    // console.log(resultado)

    //Exemplo REPLACEONE
    // const filter = {id_prod:132};
    // const newProduto = {
    //     id_prod:132,
    //     status:"esgotado"
    // }
    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.replaceOne(filter,newProduto);
    // console.log(resultado)

    //Exemplo DELETEONE
    // const filter = {id_prod:132};

    // const collection = client.db('loja').collection('produtos')
    // const resultado = await collection.deleteOne(filter);
    // console.log(resultado)

    //Exemplo DELETEMANY
    const filter = {id_prod:{$in:[122,123,124]}};

    const collection = client.db('loja').collection('produtos')
    const resultado = await collection.deleteMany(filter);
    console.log(resultado)

} catch (error) {
    console.log(error)
}
finally {
    await client.close()
    process.exit(0)
}