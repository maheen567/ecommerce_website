
const getData = async () => {
    const res = await fetch('https://jsonserver.reactbd.com/watch');
    if (!res){
      throw new Error('Failed To Fetch Data');
    }
    return res.json();
  };

  export const getSingleProduct = async (_id: number) => {
    const item = await getData()
    const singleItem = await item.find((product: any) => product._id === _id)
    return singleItem;
  }