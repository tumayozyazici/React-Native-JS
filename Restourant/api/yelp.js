import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer a8_sh6dmqZD4qvXp2_8CubUNgtEw_jXAUFIJ2-JGRReM-7uq1CL6cR5GqzsMALtrFGsvQ7_8yamLmB6NQIolphruO6m0PN7OYdj271VJA3ziIRG0sxTrhBs0P_glZ3Yx'
    },
});