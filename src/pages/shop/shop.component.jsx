import React from "react";
import "../../components/preview-collection/preview-collection.component";
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from "react-router-dom";
import collectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={collectionPage} />
  </div>
);

export default ShopPage;
