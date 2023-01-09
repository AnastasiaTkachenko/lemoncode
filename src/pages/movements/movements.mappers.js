import { iban } from '@lemoncode/fonk-iban-validator';

const mapMovementFromApiToViewModel = (movement) => {
  return {
    id: movement.id,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    description: movement.description,
    realTransaction: new Date(movement.realTransaction).toLocaleString(),
    transaction: new Date(movement.transaction).toLocaleString(),
  };
};

export const mapMovementListFromApiToViewModel = (movementList) => {
  return movementList.map((movement) =>
    mapMovementFromApiToViewModel(movement)
  );
};

export const mapAccountMovementsFromApiToViewModel = (movement) => {
  return {
    id: movement.id,
    iban: movement.iban,
    alias: movement.name,
    balance: `${movement.balance} €`,
  };
};
