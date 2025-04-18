import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-cover bg-center' style={{ backgroundImage: `url('/background.png')` }}>
      <div className='bg-[#FAF9FA] rounded-2xl p-10 max-w-md'>
        <div className='h-[400px] rounded-3xl mt-2 relative' style={{
          backgroundImage: `linear-gradient(to right, rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))`,
        }}>
          <div className='absolute right-0 mt-[-2rem]'>
            <svg
              // onClick={}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="17"
              height="17"
            >
              <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
            </svg>
          </div>
          <div className='text-center pt-40'>
            <h3 className='text-6xl font-extrabold'>Hello</h3>
          </div>
        </div>
        <form>
          <div className='mt-16 mb-4'>
            <Stack spacing={2} direction="row">
              <Button
                variant='contained'
                className='bg-[#F2F2F2] text-black font-semibold text-2xl w-[200px] h-[75px]'>
                -
              </Button>
              <Button
                className='bg-[#F2F2F2] text-black font-semibold text-2xl w-[200px] h-[75px]'
                variant='contained'>
                +
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
