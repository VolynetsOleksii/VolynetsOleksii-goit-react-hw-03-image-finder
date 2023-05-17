import { TailSpin } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => 
{
    return (
   <LoaderWrapper>
     <TailSpin height="80" width="80" color="#4fa94d" />; 
   </LoaderWrapper>
    )
}


export default Loader;
