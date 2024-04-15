import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function NewsPage() {
  return (
    <div className="grid  gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">一頁式廣告</CardTitle>
          <BeakerIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NT 6,000</div>
          <p className="text-xs text-muted-foreground">2天以上/工作天</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">個人網頁</CardTitle>
          <BeakerIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NT 6,000</div>
          <p className="text-xs text-muted-foreground">3天以上/工作天</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">形象網站</CardTitle>
          <BeakerIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NT 15,000</div>
          <p className="text-xs text-muted-foreground">6天以上/工作天</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">電商網站</CardTitle>
          <BeakerIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">NT 50,000</div>
          <p className="text-xs text-muted-foreground">12天以上/工作天</p>
        </CardContent>
      </Card>
    </div>
  );
}
