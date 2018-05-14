import { gql } from 'react-apollo';
import withQuery from 'coral-framework/hocs/withQuery';
import Header from '../components/Header';
import CommunityIndicator from '../routes/Community/containers/Indicator';
import { getDefinitionName } from 'coral-framework/utils';

export default withQuery(
  gql`
    query TalkAdmin_Header($nullID: ID) {
      ...${getDefinitionName(CommunityIndicator.fragments.root)}
    }
    ${CommunityIndicator.fragments.root}
  `,
  {
    options: {
      variables: { nullID: null },
    },
  }
)(Header);
