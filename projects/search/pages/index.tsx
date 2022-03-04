import { getSearchClient } from '@nubo-ui/search';
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch-dom';

const searchClient = getSearchClient({
  apiKey: 'apik-d5465adaccdbcfca09def91a910a29ec68bd23cdbded0bafc4',
});

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="companies">
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default App;
