import { getAccountMovement,getMovementList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import {
  mapMovementListFromApiToViewModel,
  mapAccountMovementsFromApiToViewModel,
} from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers/element.helpers';

const params = history.getParams();

getMovementList(params.id).then((data) => {
  let account = mapMovementListFromApiToViewModel(data);
  addMovementRows(account);
});

getAccountMovement(params.id).then((data) => {
  let movement = mapAccountMovementsFromApiToViewModel(data[0]);
  onSetValues(movement);
});
