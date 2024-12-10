export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      listings: {
        Row: {
          allows_pets: boolean | null
          assignee: number | null
          assignee_name: string | null
          author_name: string
          available_from: string | null
          bathrooms: number | null
          bedrooms: number | null
          building_name: string | null
          building_number: string | null
          council: string | null
          council_tax_band:
            | Database["public"]["Enums"]["council_tax_band"]
            | null
          country: string | null
          created_at: string
          created_by: number | null
          deposit: number | null
          description: string | null
          epc_rating: Database["public"]["Enums"]["epc_rating"] | null
          has_garden: boolean | null
          heating_type: Database["public"]["Enums"]["heating_type"] | null
          id: number
          is_furnished: boolean | null
          last_edit: string
          listing_type: Database["public"]["Enums"]["listing_type"]
          locality: string | null
          min_tenancy_months: number | null
          parking_type: Database["public"]["Enums"]["parking_type"] | null
          postcode: string
          price_pcm: number | null
          reference_nr: number
          size_sqm: number | null
          status: Database["public"]["Enums"]["listing_status"]
          street_line1: string | null
          street_line2: string | null
          tenant: string
          town_city: string | null
        }
        Insert: {
          allows_pets?: boolean | null
          assignee?: number | null
          assignee_name?: string | null
          author_name: string
          available_from?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          building_name?: string | null
          building_number?: string | null
          council?: string | null
          council_tax_band?:
            | Database["public"]["Enums"]["council_tax_band"]
            | null
          country?: string | null
          created_at?: string
          created_by?: number | null
          deposit?: number | null
          description?: string | null
          epc_rating?: Database["public"]["Enums"]["epc_rating"] | null
          has_garden?: boolean | null
          heating_type?: Database["public"]["Enums"]["heating_type"] | null
          id?: number
          is_furnished?: boolean | null
          last_edit?: string
          listing_type: Database["public"]["Enums"]["listing_type"]
          locality?: string | null
          min_tenancy_months?: number | null
          parking_type?: Database["public"]["Enums"]["parking_type"] | null
          postcode: string
          price_pcm?: number | null
          reference_nr?: number
          size_sqm?: number | null
          status?: Database["public"]["Enums"]["listing_status"]
          street_line1?: string | null
          street_line2?: string | null
          tenant: string
          town_city?: string | null
        }
        Update: {
          allows_pets?: boolean | null
          assignee?: number | null
          assignee_name?: string | null
          author_name?: string
          available_from?: string | null
          bathrooms?: number | null
          bedrooms?: number | null
          building_name?: string | null
          building_number?: string | null
          council?: string | null
          council_tax_band?:
            | Database["public"]["Enums"]["council_tax_band"]
            | null
          country?: string | null
          created_at?: string
          created_by?: number | null
          deposit?: number | null
          description?: string | null
          epc_rating?: Database["public"]["Enums"]["epc_rating"] | null
          has_garden?: boolean | null
          heating_type?: Database["public"]["Enums"]["heating_type"] | null
          id?: number
          is_furnished?: boolean | null
          last_edit?: string
          listing_type?: Database["public"]["Enums"]["listing_type"]
          locality?: string | null
          min_tenancy_months?: number | null
          parking_type?: Database["public"]["Enums"]["parking_type"] | null
          postcode?: string
          price_pcm?: number | null
          reference_nr?: number
          size_sqm?: number | null
          status?: Database["public"]["Enums"]["listing_status"]
          street_line1?: string | null
          street_line2?: string | null
          tenant?: string
          town_city?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_assignee_fkey"
            columns: ["assignee"]
            isOneToOne: false
            referencedRelation: "service_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "service_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_tenant_fkey"
            columns: ["tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      service_users: {
        Row: {
          created_at: string
          full_name: string | null
          id: number
          job_title: string | null
          supabase_user: string
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          created_at?: string
          full_name?: string | null
          id?: number
          job_title?: string | null
          supabase_user: string
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          created_at?: string
          full_name?: string | null
          id?: number
          job_title?: string | null
          supabase_user?: string
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
      tenant_permissions: {
        Row: {
          created_at: string
          id: number
          service_user: number
          tenant: string
        }
        Insert: {
          created_at?: string
          id?: number
          service_user: number
          tenant: string
        }
        Update: {
          created_at?: string
          id?: number
          service_user?: number
          tenant?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_permissions_service_user_fkey"
            columns: ["service_user"]
            isOneToOne: false
            referencedRelation: "service_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenant_permissions_tenant_fkey"
            columns: ["tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string
          domain: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          domain: string
          id: string
          name: string
        }
        Update: {
          created_at?: string
          domain?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_tenant_userlist: {
        Args: {
          tenant_id: string
        }
        Returns: Json
      }
    }
    Enums: {
      council_tax_band: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i"
      epc_rating: "a" | "b" | "c" | "d" | "e" | "f" | "g"
      heating_type:
        | "gas_boiler"
        | "electric_space"
        | "electric_boiler"
        | "electric_floor"
        | "heat_pump"
        | "hvac"
      listing_status: "active" | "inactive" | "suspended" | "taken"
      listing_type: "rental" | "freehold" | "leasehold"
      parking_type: "street" | "driveway" | "garage" | "none"
      user_type: "consumer" | "business"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

