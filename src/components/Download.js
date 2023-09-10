import html2canvas from 'html2canvas';

export default function Download () {

    const handleClick = () => {

        const quote = document.querySelector('.quote');
    
        html2canvas(quote,{
          allowTaint: true,
          useCORS: true,
          scale: 5
        }).then(function (canvas) {

          const link = document.createElement('a');
          link.download = 'quote.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          
        });
      }

    return (

        <button className='btn' onClick={handleClick}>Download</button>
    )
}