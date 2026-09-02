import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 flex items-center justify-center">
      <Container size="md" className="text-center space-y-6">
        <div className="mx-auto h-14 w-14 rounded-2xl bg-muted/60 border border-border flex items-center justify-center text-muted-foreground">
          <FileQuestion className="h-7 w-7" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
            404 Error
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan kembali ke halaman utama portfolio.
          </p>
        </div>

        <div className="pt-2">
          <Button variant="primary" size="md" href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Button>
        </div>
      </Container>
    </div>
  );
}
