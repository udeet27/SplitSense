import { Badge } from "@/components/ui/badge";
import { Expense } from "../lib/type";
import { formatDate } from "../lib/utils";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { COLORS } from "./SpendChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  expenses: Expense[];
};

export const ExpensesTable = ({ expenses }: Props) => (
  <TableBody className="selection:text-sky-400">
    {expenses.map((expense) => {
      const {
        category,
        cost,
        date,
        id,
        currencyCode,
        description,
        users,
        groupTotal,
      } = expense;
      return (
        <TableRow
          key={id}
          onClick={() => {
            // copy stringified expense to clipboard
            // navigator.clipboard.writeText(JSON.stringify(expense));
          }}
        >
          <TableCell>{description}</TableCell>
          <TableCell>
            <Badge
              style={{ backgroundColor: COLORS[category.id % COLORS.length] }}
            >
              {category.name}
            </Badge>
          </TableCell>
          <TableCell>
            {currencyCode} {groupTotal}
          </TableCell>
          <TableCell>
            {currencyCode} {cost}
          </TableCell>
          {/* <TableCell> {costUSD ? `USD ${costUSD}` : "-"}</TableCell> */}
          <TableCell>{formatDate(new Date(date).getTime())}</TableCell>
          <TableCell>
            <div className="flex gap-2">
              {users.map(({ user }) => (
                <Badge key={user.id} variant="secondary">
                  {user.first_name} {user.last_name}&nbsp;&nbsp;
                  <Avatar className="h-8 w-8">
                 <AvatarImage src={user.picture.medium || undefined} alt={user.first_name || ""} />
                 <AvatarFallback>{user.first_name} {user.last_name}</AvatarFallback>
               </Avatar>
                </Badge>                
              ))
              }
            </div>
          </TableCell>
        </TableRow>
      );
    })}
  </TableBody>
);
