
interface Props {
    params: {
        id: string;
    };
    }

const ProductDetails = ({params: {id}}: Props) => {

  return <div>ProductDetails {id}</div>;
}
export default ProductDetails;

