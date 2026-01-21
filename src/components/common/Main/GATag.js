import { getGAID } from '@utilities/dev';

function GATag() {
  const GAId = getGAID();

  const GACode = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GAId}');
  `;
  return GAId ? (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GAId}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: GACode }}
      />
    </>
  ) : null;
}

export default GATag;
