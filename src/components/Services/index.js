import { gql, request} from "graphql-request"

const MASTER_URL= "https://api-ap-south-1.hygraph.com/v2/cluto521a02mx08waax6e0qz3/master";

export const getCarsList = async () => {
    const query = gql`
    query MyQuery {
      carRental {
        name
        price
        numberOfSeats
        carType
        carBrand
        carAverage
        carImage {
          url
        }
      }
    }
      `


      const result=await request(MASTER_URL,query);
      return result;
}

export const getStoreLocations = async () => {
    const query=gql`
    query StoreLocations {
      storeLocations {
        address
      }
    }   
    `
    const result=await request(MASTER_URL,query);
      return result;
} 

export const createBooking = async (formValue) => {
  const mutationQuery = `
    mutation MyMutation {
      createBooking(
        data: {
          userName: "${formValue.userName}", 
          pickUpDate: "${formValue.pickUpDate}", 
          pickUpTime: "${formValue.pickUpTime}", 
          dropOffDate: "${formValue.dropOffDate}", 
          dropOffTime: "${formValue.dropOffTime}", 
          contactNumber: "${formValue.contactNumber}", 
        }
      ) {
        id
      }
    }
  `;
  
    const result = await request(MASTER_URL, mutationQuery);
    return result;
};